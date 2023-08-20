import Joi from 'joi'

export const schemaSession = Joi.object({
  user: Joi.string()
    .required()
    .messages({
      'string.base': 'El usuario debe ser una cadena de texto.',
      'string.empty': 'El usuario no puede estar vacío.',
      'any.required': 'El usuario es obligatorio.',
    }),
  password: Joi.string()
    .required()
    .messages({
      'string.base': 'La contraseña debe ser una cadena de texto.',
      'string.empty': 'La contraseña no puede estar vacía.',
      'any.required': 'La contraseña es obligatoria.',
    })
}).messages({
    'object.unknown': 'La propiedad "{#label}" no está permitida.'
})
