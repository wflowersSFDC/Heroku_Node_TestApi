const data = require('./mockdata.js');
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/products', (req, res) => {
  let products = data.getProducts();
  return res.send(products[Math.floor(Math.random()*products.length)]);
}); 

app.get('/invoices', (req, res) => {
  return res.send(data.getInvoices());
}); 

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})