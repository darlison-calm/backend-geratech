const { where } = require('sequelize');
const userModel = require('../models/usersModel');
const usersModel = require('../models/usersModel');

const userCreate = async (req, res, next) => {

    const { nome, sobrenome, email, senha } = req.body
    try {
        const newUser = await usersModel.create({
            first_name: nome,
            surname: sobrenome,
            email: email,
            password: senha
        });
        console.log("Usuário criado com sucesso!: ",  newUser.id);
        res.status(201).send({
            message: `Usuário criado com sucesso!: ${newUser.id}`
        })
    } catch (error) {
        res.status(400).send({
            message: `Erro ao criar o usuário: ${error}`
        })
    }
};

const userList = async  (req, res, next) => {
    try {
        const usersList = await  usersModel.findAll();
        res.send(usersList)

    } catch (error) {
        res.send({
            message: 'Erro ao listar os usuários!'
        })
    }
};

const  userUpdate = async (req, res) => { 
    const id = parseInt(req.params.id);
    await userModel.update(
        {...req.body},
        { where: {id: id}}
    )
}


module.exports = { 
    userCreate,
    userList,
    userUpdate
};