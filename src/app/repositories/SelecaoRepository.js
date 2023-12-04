import conexao from "../database/conexao.js"

class SelecaoRepository{
    //CRUD

    create(){

    }
    findAll(){
        const sql = "SELECT * FROM selecoes;"
        return new Promise((resolve, reject) =>{
            conexao.query(sql, (erro, resultado)=>{
                if(erro)return reject('Não foi possivel localizar.')
                //fazer parse dos resultados
                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(row)

                
                
            })
        })
    
    
    }
    findById(id){
        //const id = req.params.id
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
    }

    update(){

    }

    delete(){

    }
}

export default new SelecaoRepository()