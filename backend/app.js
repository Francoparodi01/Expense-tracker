const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT


//Middlewares
app.use(express.json());
app.use(cors())

app.get('/', (req, res)=>{
    res.send('Hola')
})

const server = () =>{
    app.listen(PORT, () =>{
        console.log('Escuchando el puerto:', PORT)
    })
}

server()