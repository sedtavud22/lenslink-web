import Joi from "joi";

const editProfileSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .required()
    .messages({ "string.empty": "First name is required" }),
  lastName: Joi.string()
    .trim()
    .required()
    .messages({ "string.empty": "Last name is required" }),
  gender: Joi.string()
    .required()
    .messages({ "string.empty": "Please select your gender" }),
  role: Joi.string()
    .required()
    .messages({ "string.empty": "Please select your role" }),
  province: Joi.string()
    .required()
    .messages({ "string.empty": "Please select your province" }),
  profileInfo: Joi.string().trim().allow(""),
});

export default editProfileSchema;
