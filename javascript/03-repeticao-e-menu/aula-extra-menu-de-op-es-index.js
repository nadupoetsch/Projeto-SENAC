let opcao 

do{
  alert('1 - Opção 1')
  alert('2 - Opção 2')
  alert('3 - Opção 3')
  alert('0 - Sair')
  opcao = prompt('Digite a opção desejada: ')

  switch(opcao){
    case '1':
      alert('Passou pelo 1')
      break
    case '2':
      alert('Passou pelo 2')
      break
    case '3':
      alert('Passou pelo 3')
      break
    case '0':
      alert('Tchau!')
      break
    default:
      alert('Opção inválida')
  }

}while(opcao != '0')