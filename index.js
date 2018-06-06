var path=require('path');
var express = require('express');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/users/:name',function (req,res) {
    res.render('login',{
        name:req.params.name,
    });
});

app.listen(3000);