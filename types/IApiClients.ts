import { AxiosRequestHeaders } from 'axios';

export interface IApiClient {
    get<TResponse>(
        path: string,
        params?: Record<string, unknown>,
    ): Promise<TResponse>;
    post<TRequest, AxiosResponse>(
        path: string,
        object: TRequest,
        config?: { headers: AxiosRequestHeaders },
    ): Promise<AxiosResponse>;
}
