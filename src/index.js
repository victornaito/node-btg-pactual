const express = require('express')
const file = require('./routes/file')
const login = require('./routes/token')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/', [file, login])
app.set('view engine', 'ejs');

app.listen(process.env.PORT | 5000, () => {
    console.log(`====> Server listening at ${process.env.PORT}`)
})