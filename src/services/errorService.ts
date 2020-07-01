import HttpStatus from 'http-status-codes';

/** This class provides custom error handling service that helps throw HTTP errors using defined structure.
 * It also enlists helper classes that can be used to throw errors in common error case scenarios
 */

class HttpError extends Error {
  /**
   * name of error message
   *
   * @type {string}
   * @memberof HttpError
   */
  public readonly name: string;
  /**
   * Http status code of error
   *
   * @type {string}
   * @memberof HttpError
   */
  public readonly httpCode: number;
  /**
   * Flag if it is runtime error and should be handled properly
   *
   * @type {string}
   * @memberof HttpError
   */
  public readonly isOperational: boolean;
  /**
   * More informatin about the error
   *
   * @type {string}
   * @memberof HttpError
   */
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
