const express = require('express')

const app = express()

app.get('/', (req, res) => {
	res.send(req.query.find)
})

app.get('/profile/:id', (req, res) => {
	const sendObject = req.params.id
	res.send(sendObject)
})

app.listen(7000)
console.log('listening to port 7000')