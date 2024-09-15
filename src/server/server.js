import '../db/db.js'
import express from 'express'
import cors from 'cors'
const PORT = process.env.PORT || 5000
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(`${process.cwd()}/src/public`))

app.listen(PORT, () => {
  console.log('Server listening on port ' + PORT)
})
