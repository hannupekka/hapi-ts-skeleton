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
      expect(result).toEqual([{ id: '1', name: 'bob', age: 30 }]);
    });
  });

  describe('POST /users', () => {
    it('should reply with validation error for invalid payload', async () => {
      const { statusCode, result } = await server.inject({
        method: 'POST',
        payload: {
          name: 'john',
        },
        url: `/v${config.API_VERSION}/users`,
      });

      expect(statusCode).toBe(400);
      expect(result).toEqual({
        error: 'Bad Request',
        message: 'child "age" fails because ["age" is required]',
        statusCode: 400,
        validation: { keys: ['age'], source: 'payload' },
      });
    });

    it('should add new user and return it', async () => {
      const { statusCode, result } = await server.inject({
        method: 'POST',
        payload: {
          age: 50,
          name: 'john',
        },
        url: `/v${config.API_VERSION}/users`,
      });

      expect(statusCode).toBe(200);
      expect(result).toEqual({ id: '2', name: 'john', age: 50 });
    });
  });
});
