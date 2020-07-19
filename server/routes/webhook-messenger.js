module.exports = function (app) {
  // console.log('app', app)
  app.get('/', function (req, res) {
    res.send('GET request to the homepage')
  })
  app.get('/webhook', function (req, res) {
    /* eslint-disable-next-line */
    const VERIFY_TOKEN = process.env.VERIFY_TOKEN || 'ABCDE123'
    const mode = req.query['hub.mode']
    const token = req.query['hub.verify_token']
    const challenge = req.query['hub.challenge']

    // Checks if a token and mode is in the query string of the request
    if (mode && token) {
      // Checks the mode and token sent is correct
      if (mode === 'subscribe' && token === VERIFY_TOKEN) {
        // Responds with the challenge token from the request
        console.log('WEBHOOK_VERIFIED')
        res.status(200).send(challenge)
      } else {
        // Responds with '403 Forbidden' if verify tokens do not match
        console.log('mode', mode, token, VERIFY_TOKEN)
        res.sendStatus(403)
      }
    }
  })
  app.post('/webhook', function (req, res) {
    /* eslint-disable-next-line */
    const body = req.body
    console.log(body)

    // Checks this is an event from a page subscription
    if (body.object === 'page') {
      // Iterates over each entry - there may be multiple if batched
      body.entry.forEach(entry => {
        // Gets the message. entry.messaging is an array, but
        // will only ever contain one message, so we get index 0
        const webhookEvent = entry.messaging[0]
        console.log(webhookEvent)
      })

      // Returns a '200 OK' response to all requests
      res.status(200).send('EVENT_RECEIVED')
    } else {
      // Returns a '404 Not Found' if event is not from a page subscription
      res.sendStatus(404)
    }
  })
}
