let vetorA = []
let vetorB = []
let vetorC = []
let somavetorA = 0
let somavetorB = 0
let mediavetorC = 0
let mediavetorC2 = 0

//preenchendo o vetorA
for(let i=0; i<10; i++){
  vetorA
[i] = parseInt(prompt('Insira número representa a posição '+ i +' do vetor A: '))
}

/* //teste para ver se funcionou o vetor A
for(let cont=0; cont < vetorA.length; cont++){
  alert('elemento ' + cont + ': ' + vetorA
[cont])
}
*/

//preenchendo o vetorB
for(let i=0; i<10; i++){
  vetorB[i] = parseInt(prompt('Insira número representa a posição '+ i +' do vetor B: '))
}


//preenchendo o vetorC (soma de cada elemento)
//efetuar a soma dos valores do vetorA e vetorB
for(let i=0; i<10; i++){
  vetorC[i] = vetorA[i] + vetorB[i]
  somavetorA = somavetorA + vetorA[i]
  somavetorB += vetorB[i] // somavetorB = somavetorB + vetorB[i]
    mediavetorC2 += vetorC[i]/10
    
}

for(let i=0; i<10; i++){
  mediavetorC += vetorC[i]/vetorC.length
}

alert('\nA soma de cada elemento é: ' + vetorC)
alert('\nA soma do vetor A é: ' + somavetorA)
alert('\nA soma do vetor B é: ' + somavetorB)

alert(vetorC.length)

alert('\nA média aritmética da soma dos vetores é: ' + Math.round(mediavetorC))
alert('\nA média aritmética da soma dos vetores é: ' + Math.round(mediavetorC2))
