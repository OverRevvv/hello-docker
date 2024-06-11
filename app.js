const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.json({ message:'Hello Docker! 🐳'})
})

app.listen(port, () => {
  console.log(`app listening on port http://localhost:${port}`)
})