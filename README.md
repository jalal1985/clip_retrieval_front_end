## Welcome to the Frontend application
This application has no database setup, but it is able to save data into the pinia store which resides in the user's browser. Because there is no database, this frontend is fully dependent on either static data build in this project or an external data source such as one or several API's.

## Setup with docker
1. First add gcs-frontend.loc to your hosts file, for *nix based systems it will be located in `/etc/hosts` please note you will have to use elevated permissions (sudo) to be able to edit this file.
2. If you want to use docker, please ensure you have it installed on your system
3. To run it in docker use:
```bash
docker compose up -d
```
4. If you want to use SSL, please use the docker-nginx container (ask Gideon) to run a reverse proxy and read the readme in that project to generate your local certificates.
5. You should be able to get to the project by going to http://gcs-frontend.loc


## Setup locally

First install the dependencies using one of the bash commands below we assume you have npm installed, if not please do that first:

```bash
npm install
```

## Development Server (local)

To start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

To production build you can use the bash commands below to do so.

```bash
npm run build
```
