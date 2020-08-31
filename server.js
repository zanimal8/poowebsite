import express from 'express'
import helmet from 'helmet'
import dotenv from 'dotenv'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import serverless from 'serverless-http'

dotenv.config()

const app = express()
const router = express.Router()

app.enable('trust proxy')
app.use(helmet())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join('./client/build')))
app.use(cors())

router.post('/send',  async (req, res, next) => {
  let message = req.body.msg
  
})

app.use('/.netlify/functions/server', router)

export default app
const handler = serverless(app)
export { handler }