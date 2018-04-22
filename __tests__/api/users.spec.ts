import { Server } from 'hapi';
import { createServer } from '../../bin/server';
import config from '../../config';
import { reset } from '../../db/utils';

describe('Hello', () => {
  let server: Server;

  beforeAll(async () => {
    await reset();
    server = await createServer();
    return server.initialize();
  });

  describe('GET /users', () => {
    it('should reply with list of users', async () => {
      const { statusCode, result } = await server.inject({
        method: 'GET',
        url: `/v${config.API_VERSION}/users`,
      });

      expect(statusCode).toBe(200);
      expect(result).toEqual([]);
    });
  });
});
