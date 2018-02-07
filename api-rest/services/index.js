'use strict'

const jwt = require('jwt-simple')

function createToken(user){
  const payLoad = {
    sub: user._id,
    iat: ,
    exp: ,
  }
}

module.expports = createToken
