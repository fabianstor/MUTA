import Joi from 'joi'

export const SchemaCollectionId = Joi.number().required().positive().messages({
  'any.required': 'El id es obligatorio.',
  'number.base': 'El id debe ser un numero',
  'number.positive': 'El id debe ser un numero positivo'
})
export const SchemaCollectionBody = Joi.object({
    materialId: Joi.number()
      .integer()
      .positive()
      .required()
      .messages({
        'number.base': 'El materialId debe ser un número.',
        'number.integer': 'El materialId debe ser un número entero.',
        'number.positive': 'El materialId debe ser un número positivo.',
        'any.required': 'El materialId es obligatorio.',
      }),
    amount: Joi.number()
      .integer()
      .positive()
      .required()
      .messages({
        'number.base': 'amount debe ser un número.',
        'number.integer': 'amount debe ser un número entero.',
        'number.positive': 'amount debe ser un número positivo.',
        'any.required': 'amount es obligatoria.',
      }),
    date: Joi.string()
      .required()
      .empty('')
      .messages({
        'any.required': 'date es obligatorio.',
        'string.base': 'date debe ser una cadena de texto.',
        'string.empty': 'date no puede estar vacio'
      }),
}).messages({
  'object.unknown': 'La propiedad "{#label}" no está permitida.'
})