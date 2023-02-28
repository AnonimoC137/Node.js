const fs = require('fs');
const path = require('path');

  // Criar uma pasta
  // se tentar criar uma pasta ja existente da erro
  fs.mkdir(path.join(__dirname, '/teste'), (error) => {
    if(error) {
      return console.log('Erro: ', error);
    }

    console.log("pasta criada com sucesso")
  })
