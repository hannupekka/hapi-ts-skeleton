import { Server } from 'hapi';
import { createServer } from '../../bin/server';
import config from '../../config';

describe('Hello', () => {
  let server: Server;

  beforeEach(async () => {
    server = await createServer();
    return server.initialize();
  });

  describe('GET /hello', () => {
    it('should reply with correct message', async () => {
      const { statusCode, result } = await server.inject({
        method: 'GET',
        url: `/v${config.API_VERSION}/hello`,
      });

      expect(statusCode).toBe(200);
      expect(result).toEqual({ msg: 'Hello World!' });
    });
  });

  describe('GET /hello/{name}', () => {
    it('should reply with correct message', async () => {
      const { statusCode, result } = await server.inject({
        method: 'GET',
        url: `/v${config.API_VERSION}/hello/bob`,
      });

      expect(statusCode).toBe(200);
      expect(result).toEqual({ msg: 'Hello bob!' });
    });
  });
});
