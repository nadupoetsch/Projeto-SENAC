//uso simples do if

var idade = parseInt(prompt('informe a idade'))


if(idade <= 0)
{
  alert('Idade inválida')
}
else{
  if(idade >= 18){
  alert('Você tem ' + idade + ' anos e pode dirigir')
  }
  else{
  alert('Você tem ' + idade + ' anos e NÃO pode dirigir')
  }
}



