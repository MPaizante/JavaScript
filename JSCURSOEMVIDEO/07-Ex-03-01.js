function contar(){

    let ini = document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo =  document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length ==0 || fim.value.length == 0 || passo.value.length ==0){
        window.alert('Erro')
    } else{  
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (i < f){ //contagem crescente
            for (let c = i ; c <= f ; c += p){
                res.innerHTML += `  ${c}\u{1F60A}`
                
    
            }
        } else{ //contagem descrecente
            for (let c = i ; c >= f ; c -= p){
                res.innerHTML += ` ${c}\u{1F60A} `
            }
        }
        res.innerHTML += ` \u{1F680}`
        
    }
}
