//declaração de um vetor
let meuvetor = []

//preenchendo vetor com elementos
for(let i=0; i<10; i++){
  meuvetor[i] = i+3 //+3 é só um valor para variar na resposta 
}

//mostrar todos número do vetor
alert('Mostrar todos número do vetor:')
alert(meuvetor)

//mostrar valor em vetor específico
alert('\nMostrar valor em vetor específico, no caso 4:')
alert(meuvetor[4])

//mostrar elemento que não existe
alert('\nMostrar elemento que não existe, no caso 50:')
alert(meuvetor[50])

//verificar o número de elementos no vetor
alert('\nVerificar o número de elementos no vetor:')
alert(meuvetor.length)

//imprimindo elementos sem saber o tamanho do vetor
alert('\nimprimindo elementos sem saber o tamanho do vetor:')
for(let cont=0; cont < meuvetor.length; cont++){
  alert('elemento ' + cont + ': ' + meuvetor[cont])
}

//achando um valor no vetor
alert('\nAchando um valor no vetor:')
for(let cont=0; cont < meuvetor.length; cont++){
  if(meuvetor[cont] == 10){
    alert('Achei na posição ' + cont)
  }
}