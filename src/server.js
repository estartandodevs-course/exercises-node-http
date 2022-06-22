const http = require('http');
const fs = require('fs')
const path = require('path')

const getDirectoryDataPath = (fileName) => path.join(__dirname, 'pages', fileName);


const host = 'localhost';
const port = 8000;

aboutPath = getDirectoryDataPath("about.html")
err404Path = getDirectoryDataPath("404.html")
indexPath = getDirectoryDataPath("index.html")

aboutFile = fs.readFileSync(aboutPath)
err404File = fs.readFileSync(err404Path)
indexFile = fs.readFileSync(indexPath)

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "text/html");
  switch (req.url) {
    case "/about":
        res.writeHead(200);
        res.end(aboutFile);
        break
    case "/" || "/home":
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
}
};

const server = http.createServer(requestListener)

server.listen(port, host, () => {
  console.log(`Server running on http://${host}:${port}`)
})