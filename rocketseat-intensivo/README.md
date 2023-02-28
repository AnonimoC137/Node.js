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

* colocar npm install nodemon --save-dev 

 para ser colocado somente no ambiente de desenvolvimento, nao estando disponivel em ambiente de produção na qual o app, ou sitema ja esta online e com pessoas utilizando, para que nao fique atualizando sozinho.
 



