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



