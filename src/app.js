import express from 'express'
import router from './routes.js'

//import SelecaoController from './app/controllers/SelecaoController.js'


const app = express()
//usar o router
app.use(router)

//indicar para o express ler body com json
app.use(express.json())

//retonar o obj por id
/*function buscarSelecaoPorId(id) {
    return selecoes.filter(selecao => selecao.id == id)
}*/


// pegar a posiçao do elemento no array por id
/*function buscarIndexSelecao(id){
    return selecoes.findIndex(selecao => selecao.id == id)
}*/


//ROTAS

/*app.get('/selecoes', SelecaoController.index)/*(req , res)=>{
    //res.status(200).send(selecoes)
    const sql = "SELECT * FROM selecoes;"
    conexao.query(sql, (erro, resultado)=>{
        if (erro){
            console.log(erro)
            res.status(404).json({'erro' : erro})
        }else{
            res.status(200).json(resultado)
        }
    })
}*/

/*app.get('/selecoes/:id', SelecaoController.show) /*(req,res) =>{
    //let index = req.params.id
    //res.json(buscarSelecaoPorId(req.params.id))
    const id = req.params.id
    const sql = "SELECT * FROM selecoes WHERE id=?;"
    conexao.query(sql, id, (erro, resultado)=>{
        const linha = resultado[0]
        if (erro){
            console.log(erro)
            res.status(404).json({'erro' : erro})
        }else{
            res.status(200).json(linha)
        }
    })
})*/

/*app.post('/selecoes', SelecaoController.store) /*(req , res) =>{
    //selecoes.push(req.body)
    //res.status(201).send('Seleção cadastrada com sucesso!')
    const selecao = req.body
    const sql = "INSERT INTO selecoes SET ?;"
    conexao.query(sql, selecao, (erro, resultado)=>{
        const linha = resultado[0]
        if (erro){
            console.log(erro)
            res.status(404).json({'erro' : erro})
        }else{
            res.status(201).json(resultado)
        }
    })

})*/

/*app.put('/selecoes/:id', SelecaoController.update)/*(req,res) => {
    //let index = buscarIndexSelecao(req.params.id)
    //selecoes[index].selecao = req.body.selecao
    //selecoes[index].grupo = req.body.grupo
    //res.json(selecoes)
    const id = req.params.id
    const selecao = req.body
    const sql = "UPDATE selecoes SET ? WHERE id=?;"
    conexao.query(sql, [selecao, id], (erro, resultado)=>{
        //const linha = resultado[0]
        if (erro){
            console.log(erro)
            res.status(404).json({'erro' : erro})
        }else{
            res.status(200).json(resultado)
        }
    })
})*/


/*app.delete('/selecoes/:id', SelecaoController.delete)/*(req,res) => {
    //let index = buscarIndexSelecao(req.params.id)
    //selecoes.splice(index, 1)
    //res.send(`Seleção com id ${req.params.id} excluida com sucesso.`)
    const id = req.params.id
    const sql = "DELETE FROM selecoes WHERE id=?;"
    conexao.query(sql, id, (erro, resultado)=>{
        //const linha = resultado[0]
        if (erro){
            console.log(erro)
            res.status(404).json({'erro' : erro})
        }else{
            res.status(200).json(resultado)
        }
    })

})*/




export default app