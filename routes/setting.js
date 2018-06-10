var express=require('express');
var router=express.Router();

var checkLogin=require('../middlewares/check').checkLogin;
// GET /signin 登录页
router.get('/',checkLogin,function(req,res,next){
    res.render('setting');
});

module.exports=router;