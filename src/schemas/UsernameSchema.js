import Joi from "joi";

import { userExists } from "../api/users";

const UsernameSchema = Joi.string()
  .alphanum()
  .min(3)
  .max(30)
  .required()
  .external(async (value, helpers) => {
    const exists = await userExists(value);

    if (exists) {
      throw new Error("Username already taken");
    }
  })
  .error(
    new Error(
      "Username must be an alpha-numeric value with between 3 and 30 characters, and must not already be in use"
    )
  );

export default UsernameSchema;
