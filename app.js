const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config.json');
const app = express();
const { port } = config;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const routes = require('./src/routers/index_routers');
app.use(routes);
app.use(express.static('public'));


app.listen(port, () => console.log(`demo app listening on port ${port}!`));