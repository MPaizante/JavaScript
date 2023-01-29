var idade, eleitor, resultado;
idade = 65;
eleitor=(idade <18) ? 'Não, eleitor':'Sim, eleitor';
resultado = (idade > 30 && idade < 70);// &&(e)  ||(ou) !(SIMBOLO DE NEGAÇÃO)
alert(resultado)