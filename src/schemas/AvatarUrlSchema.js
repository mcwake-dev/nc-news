import Joi from "joi";

const AvatarUrlSchema = Joi.string()
  .uri({ scheme: ["http", "https"] })
  .required();

export default AvatarUrlSchema;
