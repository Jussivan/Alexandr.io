import express from 'express'
import Router from './routes/routes.js'

const app = express()
app.use(express.json())

app.use('/', Router)

app.listen(3000, () => {console.log("Servidor Rodando 👍")})