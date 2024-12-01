const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
})

app.get('/cart/:id([0-9]+)', (req, res) => {
  const { id } = req.params;
  res.send(`Payment methods for cart ${id}`)
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});
