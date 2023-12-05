import { consulta } from "../database/conexao.js"

class SelecaoRepository{
    //CRUD

    create(selecao){
        const sql = "INSERT INTO selecoes SET ?;"
       /* return new Promise((resolve, reject) =>{
            conexao.query(sql, selecao, (erro, resultado)=>{
                if(erro)return reject('Não foi possivel cadastrar.')
                //fazer parse dos resultados
                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(row)
                     
            })
        })*/
        return consulta(sql, selecao, 'Não foi possivel cadastrar!')
        

    }
    findAll(){
        const sql = "SELECT * FROM selecoes;"
        return consulta(sql, 'Não foi possivel cadastrar!')
        /*return new Promise((resolve, reject) =>{
            conexao.query(sql, (erro, resultado)=>{
                if(erro)return reject('Não foi possivel localizar.')
                //fazer parse dos resultados
                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(row)
                     
            })
        })*/
    
    
    }
    findById(id){
        //const id = req.params.id
        const sql = "SELECT * FROM selecoes WHERE id=?;"
        /*conexao.query(sql, id, (erro, resultado)=>{
            const linha = resultado[0]
            if (erro){
                console.log(erro)
                res.status(404).json({'erro' : erro})
            }else{
                res.status(200).json(linha)
            }
        })*/
        /*return new Promise((resolve, reject) =>{
            conexao.query(sql, id, (erro, resultado)=>{
                if(erro)return reject('Não foi possivel localizar.')
                //fazer parse dos resultados
                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(row)
                     
            })
        })*/
        return consulta(sql, id, 'Não foi possivel localizar!')
    }

    update(selecao,id){
        const sql = "UPDATE selecoes SET ? WHERE id=?;"
        /*return new Promise((resolve, reject) =>{
            conexao.query(sql, [selecao,id], (erro, resultado)=>{
                if(erro)return reject('Não foi possivel atualizar.')
                //fazer parse dos resultados
                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(row)
                     
            })
        })*/
        return consulta(sql, [selecao,id], 'Não foi possivel atualizar!')
    }

    delete(id){
        const sql = "DELETE FROM selecoes WHERE id=?;"
        /*return new Promise((resolve, reject) =>{
            conexao.query(sql, id, (erro, resultado)=>{
                if(erro)return reject('Não foi possivel deletar.')
                //fazer parse dos resultados
                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(row)
                     
            })
        })*/
        return consulta(sql, id, 'Não foi possivel deletar!')
        
    }
}

export default new SelecaoRepository()