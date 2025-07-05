var http = require('http');

//cria um objeto servidor:
http.createServer(function (req, res) {
    res.write('Servidor Ativo'); //escreve a resposta para um cliente
    res.end(); // fim da resposata
}).listen(808); //o objeto servidor atende/escuta na porta 8080