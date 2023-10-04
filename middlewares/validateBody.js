import { HttpError } from "../helpers/HttpError.js";

export const validateBody = (schema) => {
  console.log(schema);
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      throw HttpError(400, error.message);
    }
    next();
  };
  return func;
};
