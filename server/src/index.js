const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const conf = require('./config');

const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public')));

require('./routes/router')(app);

app.listen(conf.sconfig.port, conf.sconfig.adress, () => {
  console.log('Starting server');
});
