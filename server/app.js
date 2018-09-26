const express = require('express');
const path = require('path');

const app = express();

// serve build client folder
app.use(express.static(path.join(__dirname, '../client/dist')));

// add routes
const routes = require('./routes');
app.use('/api', routes);

app.listen(3000, function(){
    console.log('listen on port 3000');
});