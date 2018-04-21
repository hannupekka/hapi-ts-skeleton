import * as Hapi from 'hapi';
import * as Boom from 'boom';
import * as helloCore from '../core/hello-core';

export const helloWorld = async () => {
  return await helloCore.helloWorld();
};

export const helloName = async (req: Hapi.Request) => {
  const { name } = req.params;
  return await helloCore.helloName(name);
};

export const error = () => {
  return Boom.notImplemented();
};
