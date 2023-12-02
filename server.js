import app from './src/app.js'
//Porta
const port = 3000

// escutar a porta 3000
app.listen(port, () => {
    console.log(`Servidor rondando no endereço http://localhost:${port}`)
})