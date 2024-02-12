require('dotenv').config()
const express = require('express')
const bodyparser=require('body-parser');


const {connectToMongoDB} = require('./connect.js')


const userRoute = require('./routes/user')


const app = express()
const PORT = 8000;

connectToMongoDB()

app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());


app.use('/', userRoute)

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`)
})