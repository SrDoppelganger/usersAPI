//setup do servidor da API
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

//define rota de usuários
import usersRoutes from './routes/users.js';
app.use('/users', usersRoutes);


const port = process.env.port || 3000;

app.listen(port, ()=>{
  console.log(`O Servidor está rodando em: http://localhost:${port}`);
});


//mensagem teste
app.get('/hello',(req,res) =>{
  res.json({"message" : "Hello World!!"});
})