const express = require('express')
const app = express()
const port = 3003

const requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
  }
  
  app.use(requestTime)
  
  app.get('/', (req, res) => {
    let responseText = 'Hello World!<br>'
    responseText += `<small>Requested at: ${req.requestTime}</small>`
    res.send(responseText)
  })

app.get('/about', (req, res) => {
  res.send('Hello Web Developer!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})