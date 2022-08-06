import Joi from "joi";

const sptValidation = (data) => {
  const sptSchme = Joi.object({
    spt_day: Joi.string().required(),
    spt_name: Joi.string().required(),
    spt_set_morning: Joi.string().required(),
    spt_morning: Joi.string().required(),
    spt_set_sleep: Joi.string().required(),
    spt_sleep: Joi.string().required(),
    spt_siesta: Joi.string().required(),
    spt_kor: Joi.string().required(),
    spt_eng: Joi.string().required(),
    spt_math: Joi.string().required(),
    spt_science: Joi.string().required(),
    spt_community: Joi.string().required(),
    spt_kh: Joi.string().required(),
    spt_study: Joi.string().required(),
    spt_livetime: Joi.string().required(),
    spt_break: Joi.string().required(),
    spt_break_action: Joi.string().required(),
  });
  return sptSchme.validate(data);
  const userSchme = Joi.object({
    user_name: Joi.string().required(),
    user_id: Joi.string().required(),
    user_pw: Joi.string().required(),
    user_info: Joi.string().required(),
  });
  return userSchme.validate(data);
};

export default sptValidation;
