const http = require('http')
const config = require('./config/defaultConfig')
const path = require('path')
const route = require('./helper/route')

const server = http.createServer((req, res) => {
	const filePath = path.join(config.root, req.url)
	route(req, res, filePath)
})

server.listen(config.port, config.hostname, () => {
	const addr = `http://${config.hostname}:${config.port}`
	console.info(`Server Started at ${addr}`)
})