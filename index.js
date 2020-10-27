const express = require("express");
const path = require("path");
const app = express();
const port = 8003;


app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', require('./routes').index);


app.listen(port, () => {
  console.log(`Te estamos escuchando en http://localhost:${port}`);
});