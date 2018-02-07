'use strict'

const express = require(express)
const api = express.Router()

const ProductCtrl = require('./controles/product')

api.get('/product', ProductCtrl.getProducts)

api.get('/product/:productId', ProductCtrl.getProduct)

api.post('/product', ProductCtrl.saveProduct)

api.put('/product/:productId', ProductCtrl.updatePoduct)

api.delete('/product/:productId', ProductCtrl.deleteProduct)

module.exports = api
