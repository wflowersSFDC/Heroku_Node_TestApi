const data = require("./mockdata.js");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/invoices", (req, res) => {
  return res.send(data.getInvoices());
});

app.get("/weather", (req, res) => {
  return res.send(data.getWeather());
});

app.get("/meetingMinutes", (req, res) => {
  return res.send("meeting notes!");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
