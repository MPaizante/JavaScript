import app from './src/app.js'

import conexao from './Infra/conexao.js'

//Porta
const PORT = 3000

//fazer a conexao
conexao.connect((erro) =>{
    if(erro){
        console.log(erro)
    }else{
        console.log("Conexão realizada com sucesso!")
        // escutar a porta 3000
        app.listen(PORT, () => {
            console.log(`Servidor rondando no endereço http://localhost:${PORT}`)
        })
    }
})

