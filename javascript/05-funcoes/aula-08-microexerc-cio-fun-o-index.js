//calcula a área do quadrado
function calculoAreaRetangulo(ladoA,ladoB){
  return ladoA*ladoB
}

//verifica se é um quadrado
function eQuadrado (ladoA,ladoB){
  return ladoA == ladoB
}

// calcula o perímetro do retângulo/quadrado
function calculaPerimetroRetangulo(ladoA,ladoB){
  return 2*(ladoA+ladoB)
}

let la = parseFloat(prompt('Tamanho do lado A:'))
let lb = parseFloat(prompt('Tamanho do lado B:'))
let objeto

if(eQuadrado(la,lb)){
  objeto = 'quadrado'
}
else{
  objeto = 'retângulo'
}

alert('A área do '+ objeto +' é ' + calculoAreaRetangulo(la,lb) + 'm²')
alert('O perímetro do '+ objeto +' é ' + calculaPerimetroRetangulo(la,lb)+ 'm')