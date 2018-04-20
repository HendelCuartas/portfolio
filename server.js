const express = require('express')
const app = express()
var cors = require('cors')
var proyectos = require('./proyectos.json');

app.use(cors())

app.get('/projects', function (req, res) {
    res.send(proyectos)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})