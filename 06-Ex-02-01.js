function verificar(){
                var data = new Date()
                var ano = data.getFullYear()
                var fano= document.getElementById('txtano')
                var res = document.querySelector('div#res')//ou pode usar querySelector('dive#res')
if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('ERRO')

    }else{
                var fsex = window.document.getElementsByName('radsex')
                var idade = ano - Number(fano.value)
                var genero = ''
            img.setAttribute ('id', 'foto')
                var img = document.createElement('img')


if(fsex[0].checked){
        genero = 'Homem'
        if (idade >=0 && idade < 10){

        } else if (idade <21){

        } else if (idade < 50){

        } 
    else{

        }
        
        

    }else if (fsex[1].checked){
        genero = 'Mulher'
        if (idade >=0 && idade < 10){

        } else if (idade <21){

        } else if (idade < 50){
            
        }
    else{
        
    }
        

    }
            res.style.textAling = 'center'
            res.innerHTML = `Detectmos ${genero} com ${idade} anos.` 
    


    }




}
