let numero = parseInt(prompt('Digite o número: '))

//guarda o primeiro numero como referência
let maior = numero
let menor = numero

//teste para os outros 9 números
for(let cont=0;cont<9;cont++){

  numero = parseInt(prompt('Digite o número: '))

  if(numero>maior){
    maior = numero
  }
  else if(numero < menor){
    menor = numero
  }

} 

alert('Maior encotrado: ' + maior)
alert('Menor encotrado: ' + menor)