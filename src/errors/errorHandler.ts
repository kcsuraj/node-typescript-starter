import AppError from './appError';
import HttpStatusCode from '../config/httpStatusCode';
import { error } from './errorResponse';

function handleError(err: AppError) {
  const errorObject = {
    name: err.name || 'Unknown',
    statusCode: err.httpCode || 500,
    message: err.description || 'Something went wrong'
  };
  // Log error
  // console.log(error(errorObject.message, errorObject.statusCode || HttpStatusCode.INTERNAL_SERVER, err.stack));
  return error(errorObject.message, errorObject.statusCode || HttpStatusCode.INTERNAL_SERVER);
}

function isTrustedError(err: Error) {
  if (err instanceof AppError) {
    return err.isOperational;
  }
  return false;
}

export { handleError, isTrustedError };
