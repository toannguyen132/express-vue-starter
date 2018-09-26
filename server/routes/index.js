const fs = require('fs');
const express = require('express');
const router = express.Router();

fs.readdirSync(__dirname).forEach(function(file) {
    if (file == 'index.js') return;

    let services = [];
    services.push(file.substr(0, file.lastIndexOf('.')));
    
    services.forEach(function(service) {
        const serviceRoute = require('./' + service);
        router.use('/' + service, serviceRoute);
    });
});

module.exports = router;