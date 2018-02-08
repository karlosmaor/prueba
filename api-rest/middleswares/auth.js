'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config')

function isAuth(req,res,next){
  if(!req.headers.authorization){
    return res.status(403).send({message:'No tienes autorización'})
  }
  const token = req.headers.authorization.split(" ")[1]
  const payLoad = jwt.decode(token,config.SECRET_TOKEN)
}
