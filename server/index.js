import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import Database from './utils/db.js'

//router object
dotenv.config()

const db = new Database();
const URI = process.env.MONGODB_URI

await db.connectDB( URI )

const PORT  = process.env.PORT 
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use(express.json())


app.get('/api', (req, res) =>{
    res.send("hello world")
})



app.listen( PORT, () => {
    console.log( `Server running on http://localhost:${PORT}` )
})