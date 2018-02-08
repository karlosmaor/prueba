'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config')

function createToken(user){
  const payLoad = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(14,'days').unix(),
  }

  return jwt.encode(payLoad,config.SECRET_TOKEN)

}

module.expports = createToken
