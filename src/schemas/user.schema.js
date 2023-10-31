import joi from 'joi';

export const userSchema = joi.object({ 
  name: joi.string().required().min(10).messages({
    'string.empty': 'O campo nome é obrigatório.',
    'string.base': 'Campo nome inválido.',
    'any.required': 'O campo nome é obrigatório.',
    'string.min': 'Campo nome inválido.'
  }),
  email: joi.string().email().required().messages({
    'string.email': 'Campo e-mail inválido',
    'string.base': 'Campo e-mail inválido.',
    'string.empty': 'Campo e-mail inválido.',
    'any.required': 'O e-mail é obrigatório.'
  }),
  senha: joi.string().required().min(6).max(20).messages({
    'string.empty': 'O campo senha é obrigatório.',
    'string.base': 'Senha inválida',
    'string.min': 'A sua senha deve ter, no mínimo 6 caracteres.',
    'string.max': 'A sua senha deve ter, no máximo 20 caracteres.',
  })
});
