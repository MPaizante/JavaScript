var agora = new Date()
var diaSem = agora.getDay() /*D-0 S-1 T-2 Q-3 Q-4 S-5 S-6 dia da semana de acordo com JS  */
console.log(diaSem)
switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1: 
        console.log('Segunda')
        break
    case 2: 
        console.log('Terça')
        break
    case 3: 
        console.log('Quarta')
        break
    case 4: 
        console.log('Quinta')
        break
    case 5: 
        console.log('Sexta')
        break
    case 6: 
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia invalido!')
        break
}