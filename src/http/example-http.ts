import * as Hapi from 'hapi';
import * as Boom from 'boom';
import * as exampleCore from '../core/example-core';

export const helloWorld = async () => {
  return await exampleCore.helloWorld();
};

export const helloName = async (req: Hapi.Request) => {
  const { name } = req.params;
  return await exampleCore.helloName(name);
};

export const error = () => {
  return Boom.notImplemented();
};

export const getUsers = async () => {
  return await exampleCore.getUsers();
};

export const postUser = async (req: Hapi.Request) => {
  const { name, age } = req.payload as {
    name: string;
    age: number;
  };

  return await exampleCore.postUser({ name, age });
};
