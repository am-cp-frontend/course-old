const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')

const data = require('./data')

const content_types = {
    css: 'text/css',
    html: 'text/html',
    jpeg: 'image/jpeg',
    jpg: 'image/jpeg',
    png: 'image/png'
}

const binary_types = ['jpeg', 'jpg', 'png']

function readText (pathname) {
    let htmlData = fs.readFileSync(pathname, 'utf8')
    let noteData = JSON.stringify(data)

    let template = `var data = ${noteData}`
    return htmlData.replace(/{\s*data\s*}/, template)
}

function getRequestBody (request) {
    let body = ''
    
    request.on('data', data => {
        body += data
    })
        
    return new Promise(resolve => {
        request.on('end', () => {
            resolve(body)
        })
    })
}

const server = http.createServer(async (request, response) => {
    if (request.method === 'POST') {
        console.log('===')
        console.log('Handling POST request.')

        let body = await getRequestBody(request)
        console.log('Request body:', body)

        response.end(JSON.stringify({
            response: 'ok'
        }))
    } else {
        let pathname = url.parse(request.url).pathname
        
        pathname = pathname.slice(1)

        if (pathname.endsWith('/') || !pathname.length)
            pathname += 'index.html'

        if (!fs.existsSync(pathname)) {
            response.statusCode = 404
            response.end('404 Not Found')
            return
        }

        let extension = pathname.split('.').pop()
        let type = content_types[extension] || 'text/plain'
        response.setHeader('Content-Type', type)

        if (binary_types.indexOf(extension) + 1) {
            let data = fs.readFileSync(pathname)
            response.end(data)
        } else {
            response.end(readText(pathname))
        }
    }
})

server.listen(8080)