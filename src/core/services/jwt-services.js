const jwt = require('jsonwebtoken')
require('dotenv/config')
let privateKey = process.env.SECRET_KEY

function validToken(token) {
    var tokenValidate = null

    if (token == null) return false

    const tokenWithoutBearerString = token.split(' ')[1]
    
    jwt.verify(tokenWithoutBearerString, privateKey, (opt, decoded) => {
        this.tokenValidate = {
            opt,
            decoded
        }
    })

    return this.tokenValidate.decoded != undefined
}

function generateToken(login, expirationTimeInMinutes = 0.3) {
    if (login == null) return Error('não foi possível gerar o token. Usuário inválido!')

    var token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + expirationTimeInMinutes * 60
        }, 
        privateKey
    )
    return token
}

module.exports = {
    generateToken,
    validToken
}