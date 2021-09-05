const express = require('express')
const router = require('./routes')
const app = express()
const cors = require('cors')
const connect = require('./db/connect')
const dotenv = require('dotenv')
dotenv.config()
const port = 4000

app.use(cors())
app.use(express.json())
app.use('/api/v1/todos', router)

const start = async ()=>{
    try {
        await connect(process.env.DB_URL)
        app.listen(port, () => console.log(`listening to port ${port}`))
    } catch (error) {
        console.log(error);
    }
}
start()