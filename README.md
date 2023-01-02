- Command to install express on our project

```console
  $ npm install express --save
```
- Queries example
```js
// 1 parameter
localhost:3000?name=juan

// multiple parameters
localhost:3000?name=juan&lastname=perez
```
- If we want use JSON in the POST request we need to add a middleware
```js
import express from "express";

const app = express();

app.use(express.json()); // add this line
```
- How to send a response back to the client using Express
```js
// To send a message
(req, res) => res.send('Hello World!')

// To send an empty response
res.end()

// To set a http status
res.status(404).end() // just set a status
or
res.status(404).send('File not found') // set the status and response with a string

// If we want to send a response as an json..
res.json({ status: 'shesh' })
```
- Access the headers
```js
app.get('/', (req, res) => {
console.log(req.headers)
})

```
## Redirects

```js
res.redirect('/go-there')

```

## Routing
- We pass a param and it converts it in uppercase
```js 
app.get('/uppercase/:theValue', (req, res) => res.send(req.params.theValue.toUpperCase()))
```


 
