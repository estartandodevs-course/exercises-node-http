const http = require('http');
const fs = require('fs')
const path = require('path')

const getDirectoryDataPath = (fileName) => path.join(__dirname, 'pages', fileName);
const aboutFile = fs.readFileSync(getDirectoryDataPath("about.html"));
const err404File = fs.readFileSync(getDirectoryDataPath("404.html"));
const indexFile = fs.readFileSync(getDirectoryDataPath("index.html"));
const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "text/html");
  switch (req.url) {
    case "/about":
      res.writeHead(200);
      res.end(aboutFile);
      break
    case "/":
      res.writeHead(200);
      res.end(indexFile);
      break
    case "/home":
      res.writeHead(200);
      res.end(indexFile);
      break
    default:
      res.writeHead(404);
      res.end(err404File);
  };
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server running on http://${host}:${port}`)
});