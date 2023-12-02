const express = require('express')
const app = express()


// rota padrão

app.get('/',(req, res) =>{
    res.send('Olá Mundo!')
})

