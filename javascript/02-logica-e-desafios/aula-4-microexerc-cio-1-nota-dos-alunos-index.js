const nota = parseFloat(prompt('Digite sua nota:'))

if(nota < 0 | nota > 10){
  alert('nota inválida')
}
else if(nota < 6){
  alert('Aluno reprovado!')
}
else{
  alert('Aluno aprovado!')
}