const express = require('express')
const path = require('path')
const app = express()

const { engine } = require('express-handlebars');

const port = 3000


//handlebars
app.engine('handlebars', engine({ extname: '.handlebars', defaultLayout: "main"}));
app.set('view engine', 'handlebars');

// app.use(express.static(path.join(__dirname, "static"))) //built-in middleware

//Redirect all path
app.use('/', require(path.join(__dirname, 'routes/routes.js')))


app.listen(port, () => {
  console.log(`Blog-Express app listening on port http://localhost:${port}`)
})