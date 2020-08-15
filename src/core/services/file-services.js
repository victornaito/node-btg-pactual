const fs = require('fs')
const path = require('path')

function saveFileAtRootDirectoryProject(user, ip) {
    
    if (user == null) return Error('não foi possível gerar o token. Usuário inválido!')
    
    let pathToFile = path.join(__dirname, '../../assets/files/', `${user.nome}.txt`)
    if (fs.existsSync(pathToFile)) fs.truncateSync(pathToFile)

    const bodyFile = getBodyFile(user, ip)
    file = fs.appendFileSync(pathToFile, bodyFile, {encoding: 'utf-8'})
}

function getBodyFile(user, ip) {
    return `\tNome Completo: ${user.nome}
        Data de Nascimento: ${user.nascimento}
        CPF: ${user.cpf}
        RG: ${user.rg}

        Usuario Autenticado
        Login: ${user.login}
        IP: ${ip}`
}
module.exports = {
    saveFileAtRootDirectoryProject
} 