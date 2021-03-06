# hapi-ts-skeleton

Project skeleton for hapi & Typescript apps.

## Requirements

* Docker v18.03.0 or higher (for local development)
* Compose 1.20.1 or higher (for local development)
* Node 9.0.0 or higher

## Development

1.  Run `yarn` to install dependencies.
1.  Copy `env-sample` as `.env` and fill in the blanks.
1.  Run `source .env` to read env variables.
1.  Run `yarn dev:start` to start Postgres server in Docker (`yarn dev:stop` to shut it down).
1.  Run `yarn dev` to start development server.

## Production

1.  Run `yarn build` to make production build.
1.  Run `yarn start` to start production server.

## API documentation

Swagger documentation is generated automatically and can be found at `http://host:port/documentation`

## Testing

* Run `yarn test` to run tests.
* Run `yarn lint` to run TSLint.

## Acknowledgements

This project is a grateful recipient of the [Futurice Open Source sponsorship program](http://futurice.com/blog/sponsoring-free-time-open-source-activities).

## License

MIT
