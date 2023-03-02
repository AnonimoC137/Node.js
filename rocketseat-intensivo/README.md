# Modulos no NODE.JS #

* podemos criar nosso proprios modulos (nossos arquivos) e importa-los

* O Node.js vem com modulos pre-instalados (path, fs, http e etc..)

* Para importar um modulo, utilizamos o Commonjs:

@exemplo
```bash
const path = require('path');
const meuArquivo = require('./meu-arquivo.js');
```
# NPM - Node package manager #

* Podemos instalar modulos de terceiros utilizando o NPM.

* Esses modulos sao armazenados em uma pasta chamada "node_modules"

* Um arquivo chamado "package.json" lista todos os modulos que instalamos pelo NPM.

@exemplo
```bash
-> npm init // cria o package.json
-> npm install express // instala um pacote localmente
-> npm -g install nodemon // instala um pacote globalmente
```

# nodemon #

Vai fazer a atualização automatica do servidor criado para que nao precise fazer isso a todo momento do desenvolvimento.

@exemplo
```bash
npm install nodemon --save-dev 
```

 para ser colocado somente no ambiente de desenvolvimento, nao estando disponivel em ambiente de produção na qual o app, ou sitema ja esta online e com pessoas utilizando, para que nao fique atualizando sozinho.

* Para executalo lá no package.json em scritps vamos colocar como 

@exemplo
 ```bash
 "start:dev": " nodemon index.js "
```
* E no terminal vamos colocar para startar o nodemon

@exemplo
```bash
npm run start:dev
```
# Path algumas funcionalidades #

 Podemos puxar algumas informações interessantes

 @exemplo
 ```bash
 const path = require('path');

// Apenas o nome do arquivo atual
console.log(path.basename(__filename));

// Nome do diretorio atual
console.log(path.dirname(__filename));

// Cria objeto Path
console.log(path.parse(__filename));

// Juntar caminhos de arquivo, cada parametro colocado add um caminho a mais 
console.log(path.join(__dirname, "teste", "teste.html"));
```

# FS e algumas funcionalidades #

* Podemos puxar algumas informações interessantes em conjunto com o path.
* Se tentar criar uma pasta que já existe vai dar erro.

@exemplo
```bash
const fs = require('fs');
const path = require('path');

// Criar uma pasta
fs.mkdir(path.join(__dirname, '/teste'), (error) => {
    if(error) {
      return console.log('Erro: ', error);
    }

    console.log("pasta criada com sucesso")
  })
```

# Criação de pasta/arquivos/adicionar/ler arquivo #

É possivel criar uma pasta usando o fs e path em conjunto com o caminho mkdir, e usando um join no path, passa o __dirname para achar o repositorio e "/teste" para ser o nome da pasta criada, em seguida um callback para caso de erro ele apontar isso.

@exemplo
```bash
  fs.mkdir(path.join(__dirname, '/teste'), (error) => {
    if(error) {
      return console.log('Erro: ', error);
    }

    console.log("pasta criada com sucesso")
})
```
### writeFile ###

Já para criar um arquivo o processo vai ser similar, usando o fs e o path em conjunto tbm, mas dessa vez com o caminho writeFile, colocando __dirname, "/teste" para achar o nome da pagina que o arquivo vai dentro e "teste.txt" vai ser o nome do arquivo e o formato.

### formatos ###  

* Observação importante, esse arquivo aceita varios formatos e o proximo parametro vai ser o que ira dentro do arquivo no caso 'hello world' e mais uma vez o callback de erro

@exemplo
```bash
  fs.writeFile(path.join(__dirname, "/teste", "test.txt"),
 'hello word', (error) => {
      if(error) {
        return console.log("Erro: ", error);
      }
      console.log('arquivo criado com sucesso')
  }
);
```
### adicionar com appendFile ###

* Ainda nesse conceito tem como adicionar mais conteudo no arquivo criado usando o fs.appendFile

@exemplo
```bash
fs.appendFile(
  path.join(__dirname, "/teste", "test.txt"),
 'Olá mundo', (error) => {
      if(error) {
        return console.log("Erro: ", error);
      }
      console.log('arquivo criado com sucesso')
  }
);
```
### ler arquivo readFile ###

* Para ler o o arquivo precisamos colocar fs.readFile, passando aqueles mesmos parametros vistos logo acima, só que o quanto parametro é o 'utf8' por conta do portugues, e no callbak vai o data que sao os dados do arquivo para usar-mos para puxar eles no console.log no final

@exemplo
```
fs.readFile(
        path.join(__dirname, '/teste', 'teste.txt'),
         'utf8', (error, data) => {
          if(error) {
            return console.log("Erro: ", error);
          }
          console.log(data)
      })
```
### atenção ###
* Observação  IMPORTANTE, o metodo de adicionar mais coisas dentro do arquivo e o metodo de ler precisam estar dentro do fs.writeFile que cria o arquivo pois como o Node é assincrono se não estiver dentro dele o Node vai tentar ler o arquivo antes mesmo do conteudo extra ser adicionado na pagina/arquivo.

@exemplo
```
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
        path.join(__dirname, '/teste', 'teste.txt'),
         'utf8', (error, data) => {
          if(error) {
            return console.log("Erro: ", error);
          }
          console.log(data)
      })
  }
);
```
# Criando um pequeno servidor com http #

Depois de fazer a require do http e apomtar a porta que no caso é a 8080, cria se uma const para o server com dois parametros o de requisição e o de resposta, dentro do if vai o writeHead com o sinal 200 de positivo digamos assim, com o content-type mostrando que é um conteudo texto em html.

O res.end vai ser o que vai enviar o conteudo de resposta, por fim criamos um caminho com server.listen, mostranso a porta e um console.log confirmando se deu tudo certo

@exemplo
```bash
const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
    if(req.url === '/home') {
        res.whiteHead(200, {'content-type': 'text/html'});
        res.end('<h1>Home page</h1>')
    }
});

server.listen(port, () => console.log(`rodando na porta ${port}`))
```

* Outro exemplo so que dessa vez usando uma array contendo uma lista com nome e email, e sendo transformada em json como resposta.

* Prestar atenção principalmente na ultima parte, onde o res.end transforma a lista em JSON.

@exemplo
```bash
if(req.url === '/users') {
        const users = [
            {
                name: 'alexandre',
                email: 'alexandrecoimbra44@gmail.com'
            },
            {
                name: 'Alessandra',
                email: 'alegremistinha19@gmail.com'
            },
        ]
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(users))
    }
```

# Instalando o express #

somente o exemplo da linha de comando para instalar o express

@exemplo
```bash
npm install express
```

# Usando o express no servidor vs Http #

Como vimos no exemplo anterior de como criar um servidor em http, agora vamos ver um exemplo de como fica ele usando o express

* vale lembrar que o express é um framework do node.js

@exemplo
```bash
const express = require('express');

const app = express();



app.get('/home', (req, res) =>{
        res.contentType('application/html');
        res.status(200).send('eu sou programador')
})

app.get('/users', (req, res) => {
    const users = [
        {
            name: 'alexandre',
            email: 'alexandrecoimbra44@gmail.com'
        },
        {
            name: 'Alessandra',
            email: 'alegremistinha19@gmail.com'
        },
    ]

    res.status(200).json(users);
})

const port = 8080

app.listen(port, () => console.log(`rodando na porta ${port}`))
```

# MongoDB para usar com o node #

primeiro passo foi se registar no mongoDB e criar a base de dados, agora vamos nos conectar ao mongoDB usando o Node no vscode.

* precisamos instalar uma dependencia que é o mongoose

@exemplo
```bash
npm install mongoose
```
# pasta .env  ATENÇÃO #

Essa pasta vai ser criada para podemos gerar variaveis com nossas senhas sensiveis, e vamos colocar no gitignore para ela nçao subir para o github .

* vou mostrar em um exemplo como deve ficar as senhas dentro desse arquivo 

@exemplo
```bash
MONGODB_USERNAME=meunick
MONGODB_PASSWORD=minhasenha
```
### ditenv ###

* Para podemos usar essa funcionalidade temos que instalar o dotenv

@exemplo
```bash
npm install dotenv
```
* Para finalizar a configuração no nosso arquivo index.js vamos colocar as seguintes configurações.

@exemplo
```bash
const dotenv = require('dotenv')

dotenv.config();
```

# Pasta SRC/DATABASE # 

foi criada a pasta src com a pasta database dentro e dentro do data o arquivo connect.js , vai ser nesta pagina que vai se conectar com o mongoose para ter acesso ao mongoDB.

@exemplo
```bash

```









