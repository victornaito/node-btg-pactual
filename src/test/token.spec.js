const assert = require('assert');


const index = require('../core/services/jwt-services');
const { throws } = require('assert');

describe('token', () => {

    it('generate token', () => {

        const login = 'victor.naito'

        const token = index.generateToken(login)

        assert.notEqual(token.length, 0)
    })

    it('does not generate token', () => {

        const login = null
        const error = new Error('não foi possível gerar o token. Usuário inválido!')

        const token = index.generateToken(login)
        assert.throws(() => { throw error })
    })

    it('valid token', () => {
        const login = 'victor.naito'

        const token = `Bearer ${index.generateToken(login)}`
        const validToken = index.validToken(token)
        assert.equal(validToken, true)
    })

    it('does not valid token', () => {
        const login = 'victor.naito'
        const token = index.generateToken(login, 0)

        const validToken = index.validToken(token)
        assert.equal(validToken, false)
    })

})