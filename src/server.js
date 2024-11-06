const app =  require('./app');
const {port} = require('./config/dotenvConfig');
const produtos = require('./mocks/sneakersList');
const snearkersController = require('./controllers/sneakersControllers');

// app.get('/products', (req, res) => {
//     res.send(
//         produtos
//     )
// });

// app.get('/products/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const produto = produtos.find(p => p.id === id);

//     if (produto) {
//         res.send(produto);
//     } else {
//         res.status(404).send({ message: "Produto não encontrado" });
//     }
// });



// // Importando JWT
// const jwt = require('jsonwebtoken')
// // Criando Token assinado
// const token = jwt.sign({id: 15, name: 'Vinicius'}, 'f23mi%T2')
// // Exibindo token
// console.log(token)

// const jwtVerify = (tokenUSer) => {
//     try{
//         const decoded = jwt.verify(tokenUSer, 'f23mi%T2')
//         return decoded
//     } catch (error){
//         console.log(`Deu ruim! ${error}`)
//     }
// }

// console.log(jwtVerify(token))


// app.get('/produtos', snearkersController.getsneakers);

app.listen(port, () => {
    console.log(`O servidor está rodando na porta http://localhost:${port}`)
});