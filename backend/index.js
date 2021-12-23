require('./config/conexao')
const express = require('express')
const app = express()
const porta = 3000

const cors =  require('cors')
app.use(cors())

//Indicando que haverá trafego de informações no formato json
app.use(express.json())

//criando variável para armazenar todas as rotas
const rotastransferencia = require('./rotas')
//para todas as rotas definidas no arquivo rotas.js, deve ser considerado o caminho /tarefas
app.use('/banco', rotastransferencia)

app.listen(porta,()=>{
    console.log('Servidor está rodando')
})
