//procedimento sem argumentos
function boasvindas(){
  //aqui escreve o subprograma
  alert('Olá!')
}

function saudacao(periodo){
  switch(periodo){
    case "dia":
      alert('bom dia!')
      break;
    case "tarde":
      alert('boa tarde!')
      break;
    case "noite":
      alert('boa noite')
      break;
    default:
      alert('não entendi!')
  }
}

//exemplo de função
function calculamedia(pti,quiz,prova){
  let resultado = pti*0.2+quiz*0.2+prova*0.6
  return resultado  
}

//execusão dos procedimento de funções
boasvindas()
saudacao("xx")
alert("Média: " + calculamedia(4.3,6.1,9.3))