const express = require('express')
const router = express.Router()
const jwtService = require('../core/services/jwt-services')
const fileService = require('../core/services/file-services')

router.get('/file', (req, res) => {
    res.render('index', { foo: 'FOO' });
});

router.post('/file', (req, res) => {
    const token = req.header('Authorization');
    if (jwtService.validToken(token)) {
        fileService.saveFileAtRootDirectoryProject(req.body, req.ip)
        res.sendStatus(200)
    }
    res.sendStatus(401)

})

module.exports = router