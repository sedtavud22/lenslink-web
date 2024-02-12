import Joi from "joi";

const loginSchema = Joi.object({
  email: Joi.string().trim().required().messages({
    "string.empty": "Email is required",
    "any.required": "Email is required",
  }),
  password: Joi.string().trim().required().messages({
    "string.empty": "Password is required",
    "any.required": "Password is required",
  }),
});

export default loginSchema;
