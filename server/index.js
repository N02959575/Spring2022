const express = require('express')
const app = express()
const port = 3000

app
  .get('/', (req, res) => {
  res.send('You are on the homepage')
  })
  .get('/about', (req, res) => {
    res.send('You are on the about page')
    })
  .get('/contact', (req, res) => {
    res.send({
        email: 'menam3@newpaltz.edu',
        phone: '123-456-7890',
        twitter: '@hello',
        instagram: '@hello'
    })
   })

app.listen(port, () => {
  console.log(`Example app listening http://localhost:${port}`)
})