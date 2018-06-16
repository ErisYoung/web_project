var express=require('express');
var app = express();
var bodyParser = require('body-parser');
var fs=require("fs");
var router=express.Router();
var checkLogin=require('../middlewares/check').checkLogin;
// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: false }));

router.get('/',function(req,res,next){
    // console.log("hah");
    // console.log(req.fields.search+'==============');
    console.log("dadad");
    res.render('home',{data:null});
});
router.post('/',function(req,res,next){
    // console.log(JSON.stringify(req.body)+'---------');  
    // console.log(req.query.id+'---------id');
    // console.log("yesdasd"+JSON.stringify(req.body)+'-------------------------');
    var bia=[{hha:1,title:2},{hha:3,title:4}];
    console.log("second");
    console.log(req.fields);
    var tes="<h1>"+bia.hha+"</h1><h2>"+bia.hha+"</h2>";
    res.send(bia);
    // res.render('home',{data:bia});
    // res.render('home');
});

module.exports=router;


