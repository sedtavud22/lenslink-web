import Joi from "joi";

const registerSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .required()
    .messages({ "string.empty": "First name is required" }),
  lastName: Joi.string()
    .trim()
    .required()
    .messages({ "string.empty": "Last name is required" }),
  email: Joi.string().email({ tlds: false }).required().messages({
    "string.empty": "Email address is required",
    "string.email": "Invalid email",
  }),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,}$/)
    .required()
    .messages({
      "string.empty": "Password is required",
      "string.pattern.base":
        "Password must be at least 6 characters and contain only alphabet and number",
    }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
    "string.empty": "Confirm password is required",
    "any.only": "Passwords do not match",
  }),
  gender: Joi.string()
    .required()
    .messages({ "string.empty": "Please select your gender" }),
  role: Joi.string()
    .required()
    .messages({ "string.empty": "Please select your role" }),
  province: Joi.string()
    .required()
    .messages({ "string.empty": "Please select your province" }),
});

export default registerSchema;
