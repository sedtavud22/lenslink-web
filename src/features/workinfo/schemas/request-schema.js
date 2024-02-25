import Joi from "joi";

const requestSchema = Joi.object({
  description: Joi.string().trim().allow(""),
  date: Joi.date().required().messages({
    "date.base": "Invalid date",
    "any.required": "Date is required",
  }),
  clientMobile: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({
      "string.pattern.base": "Invalid mobile number",
      "string.empty": "Client mobile number is required",
      "any.required": "Client mobile number is required",
    }),
  clientSocialMedia: Joi.string().trim().allow(""),
});

export default requestSchema;
