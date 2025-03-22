const express = require('express')
const app = express()
const port = 3004

app.use('/user/:id', (req, res, next) => {
    console.log('Request Type:', req.method)
    next()
  })


app.get('/about', (req, res) => {
  res.send('Hello about !')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})