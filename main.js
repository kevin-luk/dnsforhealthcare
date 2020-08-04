var express = require('express')

var server = express()

server.get('/', function(request, response){
    response.send('get response')
})

server.post('/', function(request, response){
    response.send('post response')
})

server.listen(4040)
console.log('service launched')