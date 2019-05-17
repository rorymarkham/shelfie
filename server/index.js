require('dotenv').config()
const express = require('express')
const massive = require('massive')

const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()

app.use(express.json())

massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('Database Connected')
    }).catch(error => {
        if (error) throw error;
    }) 

app.listen(SERVER_PORT, () => {
    console.log(`Theres a snake in my boot on ${SERVER_PORT}`)
})