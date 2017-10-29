const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')

const json = path.resolve(__dirname, 'data.json')

const server = http.createServer((request, response) => {
    let pathname = url.parse(request.url).pathname
    
    pathname = pathname.slice(1)

    if (pathname.endsWith('/') || !pathname.length)
        pathname += 'index.html'

    if (!fs.existsSync(pathname)) {
        response.statusCode = 404
        response.write('404 Not Found')
        response.end()
        return
    }

    let htmlData = fs.readFileSync(pathname, 'utf8')
    let noteData = fs.readFileSync(json, 'utf8')

    let template = `var data = ${noteData}`
    response.write(htmlData.replace(/{\s*data\s*}/, template))
    response.end();
})

server.listen(8080)