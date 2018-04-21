const { NODE_ENV, HOST, PORT, REQUIRE_HTTPS, API_VERSION } = process.env;

const config = { HOST: HOST || 'localhost', NODE_ENV, PORT, REQUIRE_HTTPS, API_VERSION };

export default config;
