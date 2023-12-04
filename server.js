import app from './src/app.js'



//Porta
const PORT = 3000

//fazer a conexao
 // escutar a porta 3000
 app.listen(PORT, () => {
    console.log(`Servidor rondando no endereço http://localhost:${PORT}`)
})

