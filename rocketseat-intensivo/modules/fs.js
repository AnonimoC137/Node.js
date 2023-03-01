const fs = require('fs');
const path = require('path');

  // Criar uma pasta
  // se tentar criar uma pasta ja existente da erro
  
  // fs.mkdir(path.join(__dirname, '/teste'), (error) => {
  //   if(error) {
  //     return console.log('Erro: ', error);
  //   }

  //   console.log("pasta criada com sucesso")
  // })
  

// Criar arquivo
fs.writeFile(
  path.join(__dirname, '/teste', 'test.txt'),
 'hello word', (error) => {
      if(error) {
        return console.log("Erro: ", error);
      }
      console.log('arquivo criado com sucesso')

      fs.appendFile(
        path.join(__dirname, '/teste', 'test.txt'),
       'Olá mundo', (error) => {
            if(error) {
              return console.log("Erro: ", error);
            }
            console.log('arquivo criado com sucesso')
        }
      );

      fs.readFile(
        path.join(__dirname, '/teste', 'test.txt'),
         'utf8', (error, data) => {
          if(error) {
            return console.log("Erro: ", error);
          }
          console.log(data)
      })
  }
);




