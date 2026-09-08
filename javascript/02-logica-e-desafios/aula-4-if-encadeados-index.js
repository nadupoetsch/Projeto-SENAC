//if encadeado

//ano atual
var anoAtual = 2021

//ano de nascimento
var anoNasc = parseInt(prompt('Informe ano de nascimento: '))

var idade = anoAtual - anoNasc

///////////// SOLUÇÃO COM IF SIMPLES ////////////

/*
if(idade >130){
  alert('Você não pode estar vivo')
}

alert('primeira confirmação de leitura')

if(idade >= 60 && idade <130){
  alert('Você é idos@')
}

alert('segunda confirmação de leitura')

// para fazer o comando "ou" utiliza-se ||
// para teclados americanos e configurados para ABNT, só fazer o seguinte comando:
// apertar e segurar o alt (esquedo) + apertar no teclado nuérico os números  124, soltar o alt esquerdo
//***fiz toda a explicação e o professor trocou pro && ***

if(idade < 60 && idade >= 18 ){
  alert('Você é um adulto')
}

alert('terceira confirmação de leitura')

if(idade < 18 && idade >=12){
  alert('Você é adolecente')
}

alert('quarta confirmação de leitura')

if(idade < 12 && idade >=0){
  alert('Você é uma criança')
}

alert('quinta confirmação de leitura')

if(idade <0){
  alert('ano de nascimento inválido')
}

alert('sexta confirmação de leitura')
*/

/////////// IF ENCADEADO /////////////
//quando ele testar positivo ele para a leitura


if(idade >= 130 ){
  alert('Você é não pode estar vivo')
  alert('PRIMEIRA confirmação de leitura')
}

else if(idade >= 60 ){
  alert('Você é idoso')
  alert('SEGUNDA confirmação de leitura')
}

else if(idade >= 18){
  alert('Você é adulto')
  alert('TERCEIRA confirmação de leitura')
}

else if(idade >= 12){
  alert('Você é adolecente')
  alert('QUARTA confirmação de leitura')
}

else if(idade >= 3){
  alert('Você é criança')
  alert('QUINTA confirmação de leitura')
}

else if(idade >= 0){
  alert('Você é bebê')
  alert('SEXTA confirmação de leitura')
}

else{
  alert('idade inválida')
  alert('ÚLTIMA confirmação de leitura')
}

alert('')
alert('confirmação de leitura pós código')
