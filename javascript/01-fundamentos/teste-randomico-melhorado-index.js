const getMessage = () => {
    const num = Math.floor(Math.random() * 4)

    const messages = [
        'Mande imediatamente os documentos por SEDEX AR até dia 04/09!',
        'Mande no final do semeste!',
        'Não mande!',
        'Nós avisaremos quando é para mandar os documentos!',
    ]

    return messages[num];
}

console.log(getMessage())