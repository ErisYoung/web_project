var express=require('express');
var router=express.Router();
// var bodyParser = require('body-parser');
// var fs=require("fs");
// var app = express();

var checkLogin=require('../middlewares/check').checkLogin;

router.get('/',function(req,res,next){
    // console.log("hah");
    // console.log(req.fields.search+'==============');
    res.render('home');
});
router.post('/',function(req,res,next){
    console.log(req.body+'---------');  
    console.log("yes");
    console.log(req.fields.title+'==============');
    res.render('home');
});



module.exports=router;


