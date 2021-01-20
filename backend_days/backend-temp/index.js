const express = require('express')
const app = express()
const port = 9090

app.get('asdf', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})