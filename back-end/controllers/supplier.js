// Importação do model
const Supplier = require('../models/Supplier')

const controller = {}   // Objeto vazio

controller.create = async (req, res) => {
  try {
    // Manda as informações que vieram em req.body
    // para serem gravadas no banco de dados
    await Supplier.create(req.body)

    // HTTP 201: Created
    res.status(201).end()
  }
  catch(error) {
    console.error(error)
    // HTTP 500: Internal Server Error
    res.status(500).send(error)
  }
}

controller.retrieve = async (req, res) => {
  try{

  }
  catch(error) {
    console.error(error)
    // TTP 500: Internal Server Error
    res.status(500).send(error)
  }
}

controller.retrieveAll = async (req, res) => {
  try{
    // Retonra todos os documentos da coleção
    const result = await Supplier.find()
    // HTTP 200: Ok (implicito)
    res.send(result)
  }
  catch(error) {
    console.error(error)
    // TTP 500: Internal Server Error
    res.status(500).send(error)
  }
}

controller.retrieveOne = async (req, res) => {
  try{
    // Retonra todos os documentos da coleção
    const result = await Supplier.findById(req.params.id)

    if(result) {
      // Encontrou o documento -> HTTP 200 OK (Implicito)
      res.send(result)
    }
    else {
      // Não encontrou o documento
      res.status(404)
    }
    // HTTP 200: Ok (implicito)
  }
  catch(error) {
    console.error(error)
    // TTP 500: Internal Server Error
    res.status(500).send(error)
  }
}

controller.update = async (req, res) => {
  try {
      const result = await Supplier.findByIdAndUpdate(req.params.id, req.body)

      if(result) {
        // Entrou e atualizou -> HTTP 204: No content
        res.status(204).end()
      }
      else {
        // Não encontrou para atualziar -> HTTP 404: Not found
        res.status(404).end()
      }
  }
  catch(error) {
    console.error(error)
    // TTP 500: Internal Server Error
    res.status(500).send(error)
  }
}

controller.delete = async (req, res) => {
  try {
    const result = await Supplier.findByIdAndDelete(req.params.id)

    if(result) {
      // Encontrou e. excluiu -> HTTP 204: No content
      res.status(204).end
    }
    else {
      // Não encontrou para excluir -> HTTP 04: Not found
      res.status(404).end()
    }
  }
  catch(error) {
    console.error(error)
    // TTP 500: Internal Server Error
    res.status(500).send(error)
  }
}

module.exports = controller
