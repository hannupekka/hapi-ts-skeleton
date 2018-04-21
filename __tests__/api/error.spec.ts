import { Server } from 'hapi';
import { createServer } from '../../bin/server';
import config from '../../config';

describe('Error', () => {
  let server: Server;

  beforeEach(async () => {
    server = await createServer();
    return server.initialize();
  });

  describe('GET /error', () => {
    it('should reply with correct error', async () => {
      const { statusCode, result } = await server.inject({
        method: 'GET',
        url: `/v${config.API_VERSION}/error`,
      });

      expect(statusCode).toBe(501);
      expect(result).toEqual({
        error: 'Not Implemented',
        message: 'Not Implemented',
        statusCode: 501,
      });
    });
  });
});
