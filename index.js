import express from "express";

const app = express();

app.get('/products', (req, res) => {
  res.send("Lista de productos");
})

app.post('/products', (req, res) => {
  res.send("Lista de productos");
})

app.listen(3000)

console.log(`app listening on port ${3000}`)