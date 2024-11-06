const { Sequelize } = require('sequelize');
const dotenv  = require('dotenv');
dotenv.config()

const connection = new  Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DRIVER,
        dialectOptions: {
            ssl: {
                require: true, // Força o uso do SSL (Segurança do DB)
                rejectUnauthorized: false // Permite conexões em verificação de certificado de segurança
            }
        },
        logging: true // OPCIONAL: Desativa a exibição de logs
    }
);

module.exports = connection;