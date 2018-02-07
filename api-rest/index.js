'use strict'

const mongoose =  require('mongoose')

const app  = require('./app')

const port = process.env.PORT || 3001

mongoose.connect('mongodb://localhost:27017/shop', (err,res)=>{
  if(err){
    return console.log(`Error al conectarse a la base de datos: ${err}`);
  }
  console.log('Conexion a la base de datos exitosa...')
  app.listen(port, () => {
    console.log('API REST corriendo exitosamente')
  })
})
