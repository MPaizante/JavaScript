/*var idade, eleitor, resultado;
idade = 65;
eleitor=(idade <18) ? 'Não, eleitor':'Sim, eleitor';
resultado = (idade > 30 && idade < 70);// &&(e)  ||(ou) !(SIMBOLO DE NEGAÇÃO)
alert(resultado)*/

//Objetos são como variaveis com muitos valores dentro, como "const carro = {marca:"xxx", ano:xxx, modelo"xxx"}" Os valores dentro de um objeto são chamdos propriedades  e objetos tbm podem ter metodos, um metodo é uma função colocada dentro da propriedade por exp

const carro = {
    marca:'ford', 
    modelo:'fiesta' ,
    ano:2012,
    placa: "ACB-3214",
    buzina: function(){alert('Biiiiiii')},
    completo:function(){return "A marca é "+ this.marca+" e o modelo é: "+ this.modelo;}
    };//const é bom para objetos
console.log(carro);
console.log(carro.completo());
