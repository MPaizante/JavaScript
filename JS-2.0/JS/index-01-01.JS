/*var idade, eleitor, resultado;
idade = 65;
eleitor=(idade <18) ? 'Não, eleitor':'Sim, eleitor';
resultado = (idade > 30 && idade < 70);// &&(e)  ||(ou) !(SIMBOLO DE NEGAÇÃO)
alert(resultado)*/

//Objetos são como variaveis com muitos valores dentro, como "const carro = {marca:"xxx", ano:xxx, modelo"xxx"}" Os valores dentro de um objeto são chamdos propriedades  e objetos tbm podem ter metodos, um metodo é uma função colocada dentro da propriedade por exp

/*const carro = {
    marca:'ford', 
    modelo:'fiesta' ,
    ano:2012,
    placa: "ACB-3214",
    buzina: function(){alert('Biiiiiii')},
    completo:function(){return "A marca é "+ this.marca+" e o modelo é: "+ this.modelo;}
    };//const é bom para objetos
console.log(carro);
console.log(carro.completo());*/


/* onclick = disparado quando recebe um click
ondblclick = dispara quando tem um click duplo
onmouseover = dispara quando o mouse está sobre
onmouseout = dispara quando o mouse é movido para fora do elemento
onmousemove = disparado quando o mouse é movido no elemento
onmousedown = quando o click foi pressionado
onmouseup = dispara quando o click for liberado
onfocus = dispara quando elemento recebe o foco. valido para input
onchangle = quando existe mudança no conteudo "ao mudar"
onblur = quando o elemento perde o foco
onkeydown = dispara quando uma tecla é precionada
onkeypress = dispara quando uma tecla é precionada e solta
onkeyup = qiando uma tecla é solta sobre um elemento
onload = quando a pagina termina de carregar
onresize = quando há um redirecionamento da janela

*/ 

/*function eventoClick(){//botão
    //alert('N aguento mais estudar, estou louco kkkk')//botão
    document.body.style.backgroundColor = "lightblue"
}

function eventoDblclick(){
    alert('Click Duplo')
}

function viraVermelho(){
    let div = document.getElementById('teste');
    div.style.backgroundColor = 'red'
}

function viraVerde(){
    let div = document.getElementById('teste');
    div.style.backgroundColor = 'green'
}

function adcionaTexto(){
    let p = window.document.getElementById('texto');
    p.append('O mouse moveu.');

    
}
function limpaTexto(){
    document.getElementById('campoTexto').value = " ";
}*/

//Array


/*const lista = ["arroz", "feijão", "macarrão", "leite"];
lista.push("Brasileiro");// add no final um item 
//alert(lista.length); saber quantos itens tem
//alert(lista[lista.length -1]); para mostrar o ultimo item
lista.pop();//tirou o brasileiro, no caso tira o ultimo item da lista
lista.shift();//remove o primeiro item no caso "arroz"
lista.unshift("carne")// add carne como primiero item 
lista.splice(3,0,"refrigerante", "pudim")//3 é posição e 0 é quantos quero que remova

document.getElementById("teste").innerHTML = lista.join(" VAI FILHÃO ");*/

// If e Else ************* Muito importante

/*let hora = new Date().getHours();
if(hora <12){
    //alert('Bom Dia');
}
else if(hora <18){
    //alert('Boa tarde');
}
else{
    //alert('Boa noite');
}

function verificar(){
    let nome = document.getElementById('nome').value;
    if (nome == '' || nome == null){
        let p = document.getElementById('teste');
        p.innerHTML = 'O campo não pode ser vazio.';
        p.style.color = 'red';
    }
    else{
        let p = document.getElementById("teste");
        p.innerHTML = "Tudo certo.";
        p.style.color = "blue";
    
    }
    
}*/


function verificaCor(){
    let cor = document.getElementById('cor').value;
    
    switch (cor){
        case "azul":
            document.body.style.backgroundColor = 'blue';
            break;
        case 'vermelho':
            document.body.style.backgroundColor = 'red';
            break;
        case 'verde':
            document.body.style.backgroundColor = 'green';
            break;
        case 'cinza':
            document.body.style.backgroundColor = 'gray';
            break;
        default:
            document.getElementById('teste').innerHTML = 'Nenhuma cor disponivel para: '+ cor;
    }
    
}
