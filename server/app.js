const express = require('express');
const path = require('path');

const app = express();

// serve build client folder
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/posts', function(req, res) {
    res.send({
        name: "test"
    });
});

app.listen(3000, function(){
    console.log('listen on port 3000');
});