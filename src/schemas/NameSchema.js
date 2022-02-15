import Joi from "joi";

const NameSchema = Joi.string()
  .alphanum()
  .min(3)
  .max(50)
  .required()
  .error(
    new Error("Name must be an alphanumeric value between 3 and 50 characters")
  );

export default NameSchema;
