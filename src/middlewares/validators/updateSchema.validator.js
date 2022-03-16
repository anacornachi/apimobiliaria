import Joi from 'joi';

function validateRequest(req, next, schema) {
  const options = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  };
  const {error, value} = schema.validate(req.body, options);
  if (error) {
    next(`Validation error: ${error.details.map((x) => x.message).join(', ')}`);
  } else {
    req.body = value;
    next();
  }
}

function updateSchema(req, res, next) {
  const schema = Joi.object({
    city: Joi.string().required(),
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    adminCpf: Joi.string().required(),
    adminName: Joi.string().required(),
    password: Joi.string().min(6).required(),
  });
  validateRequest(req, next, schema);
}

export default updateSchema;
