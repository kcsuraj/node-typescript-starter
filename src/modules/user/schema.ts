import Joi from 'joi';

const schema = {
  createUser: Joi.object().keys({
    email: Joi.string().email().required(),
    fullName: Joi.string().required()
  })
};

export default schema;
