const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send({
        api: '/api/users'
    });
});

module.exports = router