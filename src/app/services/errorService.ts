class AppError extends Error {
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

export default AppError;
