const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// let products = {
//   1: {
//     id: '1',
//     description: 'Widget',
//   },
//   2: {
//     id: '2',
//     description: 'Thing',
//   },
// };
app.get('/products', (req, res) => {
  return res.send(Object.values(products));
}); 

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

let products = [{"id":1,"description":"Star Anise, Whole"},
{"id":2,"description":"Flower - Commercial Bronze"},
{"id":3,"description":"Milk - Skim"},
{"id":4,"description":"Lettuce - Treviso"},
{"id":5,"description":"Pork - Loin, Center Cut"},
{"id":6,"description":"Coffee Cup 8oz 5338cd"},
{"id":7,"description":"Flour - Strong"},
{"id":8,"description":"Gin - Gilbeys London, Dry"},
{"id":9,"description":"Broccoli - Fresh"},
{"id":10,"description":"Cod - Black Whole Fillet"},
{"id":11,"description":"Soup - Campbells, Chix Gumbo"},
{"id":12,"description":"Jam - Raspberry,jar"},
{"id":13,"description":"Bread - Rye"},
{"id":14,"description":"Scallops - In Shell"},
{"id":15,"description":"Tea - Herbal - 6 Asst"},
{"id":16,"description":"Bread - Roll, Calabrese"},
{"id":17,"description":"Island Oasis - Pina Colada"},
{"id":18,"description":"Artichokes - Knobless, White"},
{"id":19,"description":"Nut - Pumpkin Seeds"},
{"id":20,"description":"Asparagus - White, Fresh"},
{"id":21,"description":"Silicone Parch. 16.3x24.3"},
{"id":22,"description":"Coffee - Cafe Moreno"},
{"id":23,"description":"Cafe Royale"},
{"id":24,"description":"Wine - White Cab Sauv.on"},
{"id":25,"description":"Beef - Top Sirloin"},
{"id":26,"description":"Lettuce - Romaine, Heart"},
{"id":27,"description":"Irish Cream - Butterscotch"},
{"id":28,"description":"Clams - Canned"},
{"id":29,"description":"Drambuie"},
{"id":30,"description":"Wine - Red, Wolf Blass, Yellow"},
{"id":31,"description":"Sole - Fillet"},
{"id":32,"description":"Table Cloth 72x144 White"},
{"id":33,"description":"Crackers - Graham"},
{"id":34,"description":"Mousse - Mango"},
{"id":35,"description":"Shrimp - 16/20, Iqf, Shell On"},
{"id":36,"description":"Pastry - Key Limepoppy Seed Tea"},
{"id":37,"description":"Rice Pilaf, Dry,package"},
{"id":38,"description":"Vodka - Hot, Lnferno"},
{"id":39,"description":"Longos - Chicken Curried"},
{"id":40,"description":"Towel Multifold"},
{"id":41,"description":"Sauce - Plum"},
{"id":42,"description":"Soup - Campbells Broccoli"},
{"id":43,"description":"Amaretto"},
{"id":44,"description":"Pastry - Key Limepoppy Seed Tea"},
{"id":45,"description":"Sauce - Sesame Thai Dressing"},
{"id":46,"description":"Beef Striploin Aaa"},
{"id":47,"description":"Turkey - Whole, Fresh"},
{"id":48,"description":"Nantucket - 518ml"},
{"id":49,"description":"Yogurt - Cherry, 175 Gr"},
{"id":50,"description":"Beer - Corona"}];