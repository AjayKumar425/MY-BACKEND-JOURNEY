require('dotenv').config()
const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('azaydotcom')
})

app.get('/login', (req, res)=>{
    res.send('<h1>please login at azay </h1>')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
