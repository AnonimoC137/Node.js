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
### adicionar com (appendFile) ###

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
### ler arquivo (readFile) ###

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
### dotenv ###

* Para podemos usar essa funcionalidade temos que instalar o dotenv

@exemplo
```bash
npm install dotenv
```
* Para finalizar a configuração no nosso arquivo index.js e no connect.js vamos colocar as seguintes configurações.

@exemplo INDEX.JS
```bash
const dotenv = require('dotenv')

dotenv.config();
```
### Colocando a senha ###

* Aqui vamos colocar uma templete string e usar esse metodo para colocar a senha acessando aquela variavel que esta la no arquivo .env, é a mesma coisa para USERNAME.

@exemplo CONNECT.JS
```bash
${process.env.MONGODB_PASSWORD}
```
* Exemplo de como vai ficar o arquivo depois de todas essas configurações

@exemplo
```bash
const mongoose = require('mongoose');

const connectToDatabase = async () => {
    await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonode.jdqwi9d.mongodb.net/?retryWrites=true&w=majority`, (error) => {
            if(error) {
                return console.log('conexão falhou');
            }

            return console.log('conexão bem sucedida')
    });
}

// para exportar
module.exports = connectToDatabase
```
# Acessando dados teste no MongoDB #

Para acessar o local onde esta os dados de teste das requisições de GET e POST

* Browser Colections

# Pasta SRC/DATABASE/connect # 

foi criada a pasta src com a pasta database dentro e dentro do data o arquivo connect.js , vai ser nesta pagina que vai se conectar com o mongoose para ter acesso ao mongoDB.

* Apos a pagina connect estar totalmente configurada na const connectToDatabase, vamos configurar ela no arquivo principal que é o index.js, lembrando que já vai conter as configurações do dotenv que é para as senhas nao aparecerem no github.

@exemplo
```bash
const dotenv = require('dotenv')
const connectToDatabase = require('./src/database/connect')

dotenv.config();
//precisa ser startado depois do dotenv.config
connectToDatabase();
```

# Pasta models #

* Nessa pasta vai conter um arquivo chamado user.model

No arquivo em questao vamos importar o mongoose e criar um modelo de informações que desejamos receber do usuario.

* Ele não explica com clareza todos os detalhes importante de por que esse arquivo foi criado desse padrao.

* require: true, significa que é obrigatorio ser nesse modelo.

@exemplo
```bash
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
        minLength: 7,
    },
});

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;
```

### GET E POST, PATCH, PUT como fazer ###

Foi aproveitado o modelo já em uso na pasta express as modificações são as seguintes.

### POST para criar usuarios ###

* Agora em vez de ser um app.get é um app.post, usando um try e catch para tornar a função assincrona, lembre de mandar o status como 201, pelo visto isso é importante. E transformando em json o user.

* Ultima parte do exemplo vai na parte superior do arquivo para mostrar ao express que esta lidando com formato json.

* DETALHE na pasta express

@exemplo
```bash
app.post('/users', async (req, res) => {
    try {
        const user = await UserModel.create(req.body);

        res.status(201).json(user);
    } catch {
        res.status(500).send(error.message)
    }
    
})

// parte superior do arquivo vai isso

app.use(express.json());
```
### GET para buscas gerais ###

* Agora um exemplo de GET para pegar todas as informações que tem atualmente no nosso banco de dados, isso porque no find não tem nenhum filtro, pois é possivel colocar justamente para decidir o que quer receber


@exemplo
```bash
app.get('/users', async (req, res) =>{
       try {
            const users = await UserModel.find({});
            res.status(200).json(users)

       } catch (error) {
            return res.status(500).send(error.message)
       }
})
```
### GET  para buscar com ID ###

Aqui vemos que mudou um pouco o caminho passado da url, e tbm o UserModel. Criamos uma const para pegar o caminho do id e chamamos ela de id mesmo, (preste atenção no caminho usando na const para pegar o id... re.params.id) tbm criado uma const para buscar com findById o id e como retorno em json colocamos esse user para ser enviado como resposta.

@exemplo
```bash
app.get('/users/:id', async (req, res) =>{
    try {
        const id = req.params.id;
         const user = await UserModel.findById(id);
         res.status(200).json(user)

    } catch (error) {
         return res.status(500).send(error.message)
    }
})
```
# PATCH ou PUT , atualizar usuario #

* O requerimento PATCH serve para quando queremos apenas atualizar um campo do dado.

* Já o PUT, serve para quando queremos alterar quase ou por completo os dados.

Vamos aos detalhes novos, a const de user tem como caminho agora o (findByIdAndUpdate) e os dois parametros a serem passados são o id e o req.body pois é no corpo da requisição que vamos enviar as alterações para nosso banco de dados, de resto tudo permanece igual como nos exemplos anteriores.

@exemplo
```bash
app.patch('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndUpdate(id, req.body)
    } catch (error) {
        res.status(500).send(error.message)
    }
});
```

# baixando o POSTman para teste.. #

O que é o POSTMAN? O Postman é um API Client que facilita aos desenvolvedores criar, compartilhar, testar e documentar APIs. Isso é feito, permitindo aos usuários criar e salvar solicitações HTTP e HTTPs simples e complexas, bem como ler suas respostas.

* Basicamente ele serve para simular uma requisição do tipo GET, que é quando voce quer receber alguma informação do banco de dados, ou uma tipo POST, quando voce quer enviar algum tipo de informação para o banco de dados.

# como fazer o requerimento teste #
Passo a passo de como fazer cada etapa no POSTman para testes de requisição.

### POST para criar usuario ###

* Depois de de criada uma nova requisição com nome de CRIAR USUARIO e colocar como tipo POST, vamos inserir na url ex: http://localhost:8080/users

* NO corpo da requisição onde vamos passar os dados deve ser em formato JSON segue o exemplo.

* Por fim clicar no botão send para enviar para nosso banco de dados.

@exemplo
```bash
{
    "firstName": "xandy",
    "lastName": "coimbra",
    "email": "alexandrecoimbra44@gmail.com",
    "password": "12345678"

}
```

### GET para puxar todos os usuarios###
* Apos criarmos no botao ... um novo requerimento e com o tipo GET, inserimos a http://localhost:8080/users para acessar o users e nossas configurações no express vao entrar em ação retornando o que foi pedido.


### GET para puxar por ID###
* Para fazer uma requisição por id e necessario colocar o numero do id junto com a url a requisição ex: http://localhost:8080/users/64064c07878ecb2d3245aada

### PATCH para atualizar usuario ###

* Apos criar uma nova requisição  colocamos na URL ex: http://localhost:8080/users/64064c07878ecb2d3245aada nessa URL contem o id do dado na qual vai ser alterado.

* no corpo da requisição vai as alterações que desejamos fazer em formato JSON.

* lembrete MUITO IMPORTANTE quando cria uma requisição do tipo POST ou PATCH, onde vamos usar o corpo da requisição para criar ou alterar algo no POSTman precisamos colocar na opção body e no tipo do arquivo JSON, alem da opção RAW.

@exemplo
```bash
{
    "email": "x.andi.3@hotmail.com"
}
```
* O retorno vai ser o seguinte 

@exemplo
```bash
{
    "_id": "64064c07878ecb2d3245aada",
    "firstName": "xandy",
    "lastName": "coimbra",
    "email": "x.andi.3@hotmail.com",
    "password": "12345678",
    "__v": 0
}
```




















