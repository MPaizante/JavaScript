var idade = 15
console.log(`Você tem ${idade} anos`)
if (idade < 16){
    console.log('Não vota')
} else if (idade <18 || idade >65 ){
    console.log('Voto opcional')
} else if (idade >=18) {
    console.log('Voto obrigatorio')
}

var horas = 1
console.log(`Agora são exatamente ${horas} horas.`)
if ( horas < 12 ) {
    console.log('Bom dia!')

}else if(horas <= 18){
console.log('Boa tarde!')
}
else {
    console.log ('boa noite!')
}

var agora = new Date()
var hora = agora.getHours()
console.log (`Agora são ${hora}`)