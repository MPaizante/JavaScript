function carregar(){

    var msg = window.document.getElementById('msg')

    var img = window.document.getElementById('imagem')

    var data = new Date()

    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    
    if(hora >=0 && hora <12 ){
        //bom dia
        img.src="imagens/manha.jpg"
        document.body.style.background="lightyellow"
    } else if (hora>=12 && hora<18){
        //boa tarde
        img.src="imagens/tarde.jpg"
        document.body.style.background="lightblue"

    } else{
        //boa noite
        img.src="imagens/noite.jpg"
        document.body.style.background="lightgray"
    }


}
