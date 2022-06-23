const http = require('node:http');
const fs = require('fs').promises;
const path = require('path');

const hostname = 'localhost';
const port = 8000;
const pathToIndex = path.join(__dirname, 'pages', 'index.html');
const pathToAbout = path.join(__dirname, 'pages', 'about.html');
const pathTo404 = path.join(__dirname, 'pages', '404.html');

const showWebpage = function (req, res) {
switch(req.url){

  case "/about":
  fs.readFile(pathToAbout).then(data => {
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200);
  res.end(data);
  })
  break;

  case "/":
  fs.readFile(pathToIndex).then(data => {
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200);
  res.end(data);
})
  break;

  case "/home":
  fs.readFile(pathToIndex).then(data => {
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200);
  res.end(data);
})
  break;

  default:
  fs.readFile(pathTo404).then(data => {
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(404);
  res.end(data);
})
}
}

const server = http.createServer(showWebpage) 

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
/*

  - TODO 1: Criar um servidor que recebe requisições HTTP na porta 8000 e responde com o conteúdo de um arquivo HTML.
  - TODO 2: Se for acessada a URL http://localhost:8000/about deve mostrar o conteúdo da pagina `pages/about.html`
  - TODO 3: Se for acessada a URL http://localhost:8000/ ou http://localhost:8000/home deve mostrar o conteúdo da pagina `pages/index.html`
  - TODO 4: Se for acessada qualquer outro caminho deve mostrar o conteúdo da pagina `pages/404.html`
 

  OBS: Deve ser utilizado apenas os módulos nativos do NODE (http, path, fs, etc), nada de instalar outras libs ( ˘︹˘ )
*/
