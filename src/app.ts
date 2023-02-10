import express from "express"
import morgan from "morgan"
import routes from './routes'
import cors from "cors"

const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
// Use routes
app.use(routes)

export default app
