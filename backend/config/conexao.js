const mysql = require('mysql')
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'senha apagada para não ser exibida no github',
    port: 3306,
    database: 'db_banco'    
})

conexao.connect((erro)=>{
    if(erro)throw erro
    console.log('Estamos conectados a base de dados')
})

module.exports = conexao