import Joi from 'joi'
import { schemaMaterial } from './materialsJoi'

export const schemaRoute = Joi.object({
    materials: Joi.array()
      .items(schemaMaterial)
      .required()
      .messages({
        'any.required': 'La propiedad materials es obligatoria.',
        'any.empty': 'La propiedad materials no puede estar vacia'
      }),
    totalWeight: Joi.number()
      .positive()
      .required()
      .messages({
        'number.base': 'La propiedad totalWeight debe ser un número.',
        'number.positive': 'La propiedad totalWeight debe ser un número positivo.',
        'any.required': 'La propiedad totalWeight es obligatoria.',
      }),
}).messages({
    'object.unknown': 'La propiedad "{#label}" no está permitida.'
})