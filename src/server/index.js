const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      massive = require('massive'),
      ctrl = require('./ctrl'),
      session = require('express-session'),
      checkForSession = require('./middleware/checkForSession'),
      authCtrl = require('./controllers/authCtrl')

require('dotenv').config()

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 280000000}
}))

app.use(checkForSession)

app.get('/', ctrl.readUsers)
app.put('/', ctrl.checkLogin)
app.post('/', ctrl.register)

app.post('/', authCtrl.login)


port = 3500

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(port, () => {console.log(`Server listening on port ${port}`)})
})