import express from 'express'


const app = express()


// rota padrão

app.get('/',(req, res) =>{
    res.send('Olá Mundo!')
})

app.get('/selecoes', (req , res)=>{
    res.send('Lista de seleções')
})



export default app