const express = require('express')
const app = express()
const porta = process.env.PORT

app.get('/',(req,res)=>{
    res.send('Matheus Paizante...')
})
app.get('/canal',(req,res)=>{
    res.json({canal:'Matheus...'})
})


app.listen(porta || 3000,()=>{console.log('Servidor Rodando')})