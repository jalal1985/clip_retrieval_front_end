import axios, { AxiosInstance, AxiosRequestHeaders } from 'axios';
import { IApiClient } from '~/types/IApiClient';
import EnumToastVariant from '~/types/EnumToastVariant';

/**
 * The APIClient class provides a single place to hold GET and POST request interfaces.
 *
 * These methods call the Axios API client with a basic set of headers
 * and other params to help you set up a basic request without knowing the Axios client.
 *
 * Theoretically, Axios should only be a dependency in this file,
 * so if we decide to move towards the fetch API we only have to edit this file.
 */
export default class ApiClient implements IApiClient {
    private client: AxiosInstance;

    /**
     * Set up the base API client
     * @param baseURL
     * @param headers
     */
    constructor(baseURL: string, headers?: AxiosRequestHeaders) {
        this.client = headers
            ? this.createAxiosClient(baseURL, headers)
            : this.createAxiosClient(baseURL);
    }

    /**
     * Provide a basic interface to create an API client.
     * This func is private to keep the instance to this class alone.
     * If you need to make an API request, use the get or post methods
     *
     * @param baseURL the base URL for the API request
     * @param headers Any request headers you need
     * @private
     */
    private createAxiosClient(
        baseURL: string,
        headers: AxiosRequestHeaders = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        } as AxiosRequestHeaders,
    ): AxiosInstance {
        return axios.create({
            baseURL,
            responseType: 'json',
            headers,
            timeout: 1000 * 60, // let loading states handle long loading times, cut off at 1 minute
        });
    }

    /**
     * Make a POST request
     *
     * @param path for example '/sales_order'
     * @param payload the body of the request
     * @param config optional config in the form of headers
     */
    async post<TRequest, TResponse>(
        path: string,
        payload: TRequest,
        config?: { headers: AxiosRequestHeaders },
    ): Promise<TResponse> {
        try {
            const response = config
                ? await this.client.post<TResponse>(path, payload, config)
                : await this.client.post<TResponse>(path, payload);
            return response.data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            useNuxtApp().$sentryCaptureApiException(
                'api-client-post',
                'post',
                {
                    path,
                    payload,
                    config,
                },
                error as Error,
            );
            return Promise.reject(error);
        }
    }

    /**
     * Make a GET request
     *
     * @param path for example '/images'
     * @param params optional params in the form of an object that Axios can parse to GET parameters
     */
    async get<TResponse>(
        path: string,
        params?: any, // eslint-disable-line @typescript-eslint/no-explicit-any
    ): Promise<TResponse> {
        try {
            const response = params
                ? await this.client.get<TResponse>(path, params)
                : await this.client.get<TResponse>(path);
            return response.data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            useNuxtApp().$sentryCaptureApiException(
                'api-client-get',
                'get',
                {
                    path,
                    params,
                },
                error as Error,
            );
            return Promise.reject(error);
        }
    }
}
