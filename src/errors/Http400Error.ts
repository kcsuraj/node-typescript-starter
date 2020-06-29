import AppError from './appError';
import HttpStatusCode from '../config/httpStatusCode';

class Http400Error extends AppError {
  constructor(description = 'Bad request') {
    super('NOT FOUND', HttpStatusCode.BAD_REQUEST, true, description);
  }
}

export default Http400Error;
