const express = require('express')
const app = express()

// Middleware to parse JSON request bodies
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
})

app.get('/cart/:id([0-9]*)', (req, res) => {
  const { id } = req.params;
  res.send(`Payment methods for cart ${id}`)
});

app.get('/available_payments', (req, res) => {
  const data = {
    payment_methods: {
    credit_cards: true,
    paypal: false
    }
  };
  res.json(data);
});

app.post('/login', (req, res) => {
  const userName = req.body.userName;
  res.send(`Welcome ${userName}`);
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});
