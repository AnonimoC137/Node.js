const path = require('path');

// Apenas o nome do arquivo atual
console.log(path.basename(__filename));

// Nome do diretorio atual
console.log(path.dirname(__filename));

// Cria objeto Path
console.log(path.parse(__filename));

// Juntar caminhos de arquivo, cada parametro colocado add um caminho a mais 
console.log(path.join(__dirname, "teste", "teste.html"));