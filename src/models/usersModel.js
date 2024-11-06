const connection = require('../config/database/config');
const { DataTypes } = require('sequelize');

let userModel = connection.define('users', {
    first_name: {
        type: DataTypes.STRING(50), 
        allowNull: false 
    },
    surname: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email : {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
})

module.exports = userModel;