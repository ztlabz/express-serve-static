
const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5050;

app.use(cors());

app.use(express.static(path.join(__dirname, 'public'))); // serve everything in public folder as static files

/*
app.get('/', (req, res) => {
  res.send('Hello World!')
});
*/

console.log('***** express-serve-static READY');

app.listen(port, () => {
  console.log(`express-serve-static listening on port ${port}`)
});