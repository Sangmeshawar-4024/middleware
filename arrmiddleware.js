const express = require('express')

const app = express()

const port = 3010

function OriginalUrl (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
  }
  
  function Method (req, res, next) {
    console.log('Request Type:', req.method)
    next()
  }
  
  const Stuff = [OriginalUrl, Method]
  app.get('/user/:id', Stuff, (req, res, next) => {
    res.send('User takes the array as middleware')
  })

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })

