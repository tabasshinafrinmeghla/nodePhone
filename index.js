const express = require('express');
const phones = require ('./phone.json')
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('All phone is here')
})
app.get('/data', (req, res) => {
  res.send('All phone data is here 100')
})
app.get('/about', (req, res) => {
  res.send('All phone details is here')
})
app.get('/phone', (req, res) => {
  res.send(phones);
})

app.listen(port, () => {
  console.log(`my Phone port: ${port}`);
})