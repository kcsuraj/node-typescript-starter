export const error = (message: string, code: number, stack?: any) => {
  const err = {
    status: 'error',
    message,
    code,
    stack
  };

  return err;
};
