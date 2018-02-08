'use strict'

const express = require('express')
const api = express.Router()
const auth = require('../middlewares/auth')

const ProductCtrl = require('../controles/product')

api.get('/product', ProductCtrl.getProducts)

api.get('/product/:productId', ProductCtrl.getProduct)

api.post('/product', ProductCtrl.saveProduct)

api.put('/product/:productId', ProductCtrl.updatePoduct)

api.delete('/product/:productId', ProductCtrl.deleteProduct)

api.get('/private', auth, function(req,res){
  res.status(200).send({message:'Tienes acceso'})
})

module.exports = api
