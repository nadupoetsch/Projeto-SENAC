const num = Math.floor(Math.random() * 4).toFixed(0)

switch (num) {
   case '0':
  	console.log('Mande imediatamente os documentos por SEDEX AR até dia 04/09!') 
  break;
  case '1':
  	console.log('Mande no final do semeste!') 
  break;
  case '2':
  	console.log('Não mande!') 
  break;
  case '3':
 	 console.log('Nós avisaremos quando é para mandar os documentos!') 
  break;
}