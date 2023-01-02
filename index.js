import express from "express";

const app = express();

app.use(express.json());

// get method example
// app.get('/', (req, res) => {
//   res.send('Hello, world!');
// });

// get the url queries 
app.get('/', (req, res) => {
  res.json({ message: 'OK', statusCode: 200 });
  console.log(req.headers);
})

app.get('/second', (req, res) => {
  res.json({ message: 'second route' })
})

app.get('/goback', (req, res) => {
  res.redirect('back')
})



// express methods
// app.get();
// app.post();
// app.put();
// app.patch();
// app.delete();


app.listen(3000, () => { console.log(`Server on port 3000`); });