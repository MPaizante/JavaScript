import express from 'express'


const app = express()

//mock
const selecoes = [
    {id: 1, selecao:'Brasil', grupo: 'G'},
    {id: 2, selecao:'Suiça', grupo: 'G'},
    {id: 3, selecao:'Servia', grupo: 'G'},
    {id: 4, selecao:'Camarões', grupo: 'G'}
]

// rota padrão

app.get('/',(req, res) =>{
    res.send('Olá Mundo!')
})

app.get('/selecoes', (req , res)=>{
    res.send('Lista de seleções')
})



export default app