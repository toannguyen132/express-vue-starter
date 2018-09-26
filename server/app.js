const express = require('express');

const app = express();

app.get('/api/posts', function(req, res) {
    res.send({
        name: "test"
    });
});

app.listen(3000, function(){
    console.log('listen on port 3000');
});