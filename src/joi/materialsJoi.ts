import Joi from 'joi'

// JOI PARA ID DE LOS MATERIALES
export const SchemaMaterialnId = Joi.number().required().positive().messages({
    'any.required': 'El id es obligatorio.',
    'number.base': 'El id debe ser un numero',
    'number.positive': 'El id debe ser un numero positivo'
})

// JOI PARA BODY DE LOS MATERIALES
export const schemaMaterial = Joi.object({
    name: Joi.string()
      .required()
      .messages({
        'string.base': 'name debe ser una cadena de texto.',
        'any.required': 'name es obligatorio.',
        'string.empty': 'name no puede estar vacio'
      }),
    weight: Joi.number()
      .positive()
      .required()
      .messages({
        'number.base': 'weight debe ser un número.',
        'number.positive': 'weight debe ser un número positivo.',
        'any.required': 'weight es obligatorio.',
      }),
    value: Joi.number()
      .positive()
      .required()
      .messages({
        'number.base': 'value debe ser un número.',
        'number.positive': 'value debe ser un número positivo.',
        'any.required': 'value es obligatorio.',
      }),
    total: Joi.number()
      .optional()
}).messages({
    'object.unknown': 'La propiedad "{#label}" no está permitida.'
})