const produtos = require('../mocks/sneakersList')

function getsneakers (req, res) {
    try{
        const token  = req.query.token
        const jwt =  require('jsonwebtoken')
        const decode = jwt.verify(token,  'f23mi%T2')
    
        if (decode) {
            res.send({
                sucess: true,
                message: 'Lista carregada com sucesso!!!',
                produtos
            })
        } else {
            res.send({
                sucess: false,
                message: 'Token inválidos!!! 👀',
                products: []
            })
        }
    }catch (error){
        res.send({
            sucess: false,
            message: `Falha na requisição ${error}!!!`,
            produtos
        })
    }

}

module.exports = {
    getsneakers
}