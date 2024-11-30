const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
})

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});


module.exports = app;