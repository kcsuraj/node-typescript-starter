import HttpStatusCode from '../config/httpStatusCode';

class AppError extends Error {
  public readonly name: string;
  public readonly httpCode: HttpStatusCode;
  public readonly isOperational: boolean;
  public readonly description: string;

  constructor(name: string, httpCode: HttpStatusCode, isOperational: boolean, description: string) {
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

export default AppError;
