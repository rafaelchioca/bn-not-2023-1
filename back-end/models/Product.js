const mongoose = require('mongoose')

const schema = mongoose.Schema({
  description: {
    type: String,
    required: true  // Campo obigatório
  },
  unit: {
    type: String,
    enum: ['un', 'kg', 'l'],
    required: true
  },
  price: {
    type: Number,
    min: 0.01,
    required: true
  },
  supplier: {
    type: mongoose.ObjectId, // Tipo para chave estrangeira
    ref: 'Supplier', // Model estrangeira
    required: true
  }
})

/*
  Parâmetros de mongoose.model:
  1º: nome da model, para uso interno (convenção: primeira letra maiúscula e singular)
  2º: relação de campos do esquema (constante schema)
  3º: nome da collection no banco de dados (convenção: mesmo nome do model, mas com
      letra minúscula e no plural)
*/
module.exports = mongoose.model('Product', schema, 'products')
