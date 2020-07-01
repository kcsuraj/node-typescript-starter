import { Request, Response, NextFunction } from 'express';
import Joi, { AnySchema } from 'joi';
import HttpStatus from 'http-status-codes';

function validator(schema: AnySchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = Joi.validate(req.body, schema);

    if (error === null) {
      next();
    }

    const filteredErrors = error.details.map((value) => ({ message: value.message, key: value.context.key }));

    return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
      name: error.name,
      code: HttpStatus.UNPROCESSABLE_ENTITY,
      description: filteredErrors
    });
  };
}

export default validator;
