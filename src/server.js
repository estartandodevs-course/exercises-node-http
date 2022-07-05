const http = require('http')
const path = require('path')
const fs = require('fs')

const host = ("localhost")
const port = process.env.PORT || 8000

const getHtmlFile = (fileName) => fs.readFileSync(path.join(__dirname, 'pages', fileName))

const pageHtmlAbout = getHtmlFile('about.html')
const pageHtmlIndex = getHtmlFile('index.html')
const pageHtml404 = getHtmlFile('404.html')

const requestListener = function (request, response) {
  response.setHeader('Content-Type', 'text/html')

  switch (request.url) {
    case ("/about"):
      response.writeHead(200)
      response.end(pageHtmlAbout)
      break

    case ("/home"):
      response.writeHead(200)
      response.end(pageHtmlIndex)
      break

    case ("/"):
      response.writeHead(200)
      response.end(pageHtmlIndex)
      break

    default:
      response.writeHead(404)
      response.end(pageHtml404)
      break
  }
}

const server = http.createServer(requestListener)

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
