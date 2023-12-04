import conexao from "../database/conexao.js"
import SelecaoRepository from "../repositories/SelecaoRepository.js"

class SelecaoController{

    async index(req , res){
        /*const sql = "SELECT * FROM selecoes;"
        conexao.query(sql, (erro, resultado)=>{
            if (erro){
                console.log(erro)
                res.status(404).json({'erro' : erro})
            }else{
                res.status(200).json(resultado)
            }
        })*/
        const row = await SelecaoRepository.findAll()
        res.json(row)
    }
    show(req,res){
        //let index = req.params.id
        //res.json(buscarSelecaoPorId(req.params.id))
        /*const id = req.params.id
        const sql = "SELECT * FROM selecoes WHERE id=?;"
        conexao.query(sql, id, (erro, resultado)=>{
            const linha = resultado[0]
            if (erro){
                console.log(erro)
                res.status(404).json({'erro' : erro})
            }else{
                res.status(200).json(linha)
            }
        })*/
        const id = req.params.id
        const row = SelecaoRepository.findById(id)
    }
    store (req , res){
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
    
    }
    update(req,res) {
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
    }
    delete(req,res){
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
    
    }
}


//Padrao Singleton
export default new SelecaoController()