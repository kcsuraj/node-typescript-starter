import HttpStatus from 'http-status-codes';

class HttpError extends Error {
  public readonly name: string;
  public readonly httpCode: number;
  public readonly isOperational: boolean;
  public readonly description: string;

  constructor(name: string, httpCode: number, isOperational: boolean, description: string) {
    super(description);

    /**
     * Restore prototype chain
     * ? https://stackoverflow.com/questions/41102060/typescript-extending-error-class
     */
    Object.setPrototypeOf(this, new.target.prototype);

    this.name = name;
    this.httpCode = httpCode;
    this.isOperational = isOperational;

    // creates the stack property on an Error instance
    Error.captureStackTrace(this);
  }
}

// commonly used http errors
class Http400Error extends HttpError {
  constructor(description = 'BAD_REQUEST') {
    super('Http400Error', HttpStatus.BAD_REQUEST, true, description);
  }
}

class Http401Error extends HttpError {
  constructor(description = 'UNAUTHOURIZED') {
    super('Http401Error', HttpStatus.UNAUTHORIZED, true, description);
  }
}

class Http403Error extends HttpError {
  constructor(description = 'FORBIDDEN') {
    super('Http403Error', HttpStatus.FORBIDDEN, true, description);
  }
}

class Http404Error extends HttpError {
  constructor(description = 'NOT FOUND') {
    super('Http404Error', HttpStatus.NOT_FOUND, true, description);
  }
}

export default HttpError;

export { Http400Error, Http401Error, Http403Error, Http404Error };
