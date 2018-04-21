export const helloWorld = async () => {
  return Promise.resolve({
    msg: 'Hello World!',
  });
};

export const helloName = async (name: string) => {
  return Promise.resolve({
    msg: `Hello ${name}!`,
  });
};
