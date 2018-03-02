//definindo a porta
const port = 3003;

//definindo importações
const express = require('express');
const bodyParser = require('body-parser');
const allowCors = require('./cors/cors');
const app = express();

//Instanciando os Middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(allowCors);

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});

module.exports = app;