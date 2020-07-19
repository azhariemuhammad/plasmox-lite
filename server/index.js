'use-strict'

const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()

app.set('port', process.env.PORT || 1337)
app.use(morgan('dev'))
app.use(bodyParser.json())

require('./routes/webhook-messenger')(app)

app.listen(app.get('port'), () => {
  console.log('webhook is alive', app.get('port'))
})
