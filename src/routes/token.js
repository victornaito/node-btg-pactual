const express = require('express')
const router = express.Router()
const jwtService = require('../core/services/jwt-services')

router.get('/login', (req, res) => {
    return res.send(jwtService.generateToken(req.query.login))
})

module.exports = router