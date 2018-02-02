'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose =  require('mongoose')

const app =  express()
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/api/product', (req,res) =>{
  res.status(200).send({products: []})
})

app.get('/api/product/:productId', (req,res)=>{

})

app.post('/api/product', (req,res) =>{
  console.log(req.body);
  res.status(200).send({message: 'El producto fue recibido'})
})

app.put('/api/product/:productId', (req,res) =>{

})

app.delete('/api/product/:productId', (req,res) =>{

})

<<<<<<< HEAD
mongoose.connect('mongodb://localhost:27017/shop', (err,res)=>{
<<<<<<< HEAD
  if(err)return console.log(`Error al conectar a la base de datos: ${err}`);
=======
=======
mongoose.connect('mongodb://146.71.79.215:27017/shop', (err,res)=>{
>>>>>>> 626a205923b4cb4017fd66449cddc2b4febeaae9
  if(err)throw err
>>>>>>> e9c7550c9a4b4316798b34f258ce55d854c9cc83
  console.log('Conexion a la base de datos exitosa...');
  app.listen(port, () => {
    console.log('API REST corriendo exitosamente')
  })
})
