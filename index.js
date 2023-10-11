const express = require('express')
const app = express()
const port = process.env.PORT || 3000

let products = {
  1: {
    id: '1',
    description: 'Widget',
  },
  2: {
    id: '2',
    description: 'Thing',
  },
};
app.get('/products', (req, res) => {
  return res.send(Object.values(products));
}); 

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
