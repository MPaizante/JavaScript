import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user:'root',
    password:'85027026',
    database:'bd_copa'

})

export default conexao
