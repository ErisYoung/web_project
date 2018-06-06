var express = require('express');
var router = express.Router();

router.get('/:name', function (req, res) {
    res.render('login', {
        name: req.params.name,
    });
});
module.exports = router;
