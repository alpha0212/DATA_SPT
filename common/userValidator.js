import Joi from "joi";

const userValidation = (data) => {
  const userSchme = Joi.object({
    user_name: Joi.string().required(),
    user_id: Joi.string().required(),
    user_pw: Joi.string().required(),
    user_info: Joi.string().required(),
  });
  return userSchme.validate(data);
};

export default userValidation;
