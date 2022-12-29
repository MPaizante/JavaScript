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
                var img = document.createElement('img')
            img.setAttribute ('id', 'foto')
            
                


if(fsex[0].checked){
        genero = 'Homem'
        if (idade >=0 && idade < 10){
            img.setAttribute('src' , '../baby-laughing-icon (1).png' )

        } else if (idade <21){
            img.setAttribute('src' , '../Male-Face-B5-icon.png' )

        } else if (idade < 50){
            img.setAttribute('src' , '../Office-Customer-Male-Light-icon.png' )    
        } 
    else{
        img.setAttribute('src' , '../Old-Boss-icon.png' )

        }
        
        

    }else if (fsex[1].checked){
        genero = 'Mulher'
        if (idade >=0 && idade < 10){
            img.setAttribute('src' , 'baby-laughing-icon (1).png' )

        } else if (idade <21){
            img.setAttribute('src' , 'browser-girl-firefox-icon.png' )

        } else if (idade < 50){
            img.setAttribute('src' , 'Office-Girl-icon.png' )
            
        }
    else{
        img.setAttribute('src' , '10177-old-woman-light-skin-tone-icon.png' )

    }
        

    }
            res.style.textAling = 'center'
            res.innerHTML = `Detectmos ${genero} com ${idade} anos.` 
            res.appendChild(img)
    


    }




}
