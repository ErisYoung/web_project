var fs = require('fs');
var path = require('path');
var sha1 = require('sha1');
var express = require('express');
var router = express.Router();

var UserModel = require('../models/users');
var checkLogin = require('../middlewares/check').checkLogin;
// GET /signin 登录页
router.get('/', checkLogin, function (req, res, next) {
    // console.log('user.id'+req.session.user.bio);
    res.render('setting');
});

router.get('/edit', checkLogin, function (req, res, next) {
    var name = req.session.user.name;
    var gender = req.session.user.gender;
    var bio = req.session.user.bio;
    var avatar = req.session.user.avatar;
    res.render('setting_edit', {
        name: name,
        bio: bio,
        avatar: avatar,
        gender: gender
    });
});

router.post('/edit', checkLogin, function (req, res, next) {
    var name = req.session.user.name;
    var gender = req.fields.gender;
    var bio = req.fields.bio;
    var password = req.fields.password;
    if (!req.files.avatar.name) {
        var avatar = req.session.user.avatar;
        // console.log(req.session.user.avatar + '---' + req.files.avatar.path);
        console.log(req.session.user.avatar+'enter1---------');
        fs.unlink(req.files.avatar.path);
    } else {
        var avatar = req.files.avatar.path.split(path.sep).pop();
        // console.log('-------------'+req.files.avatar.path.split(avatar)[0]+req.session.user.avatar);
        fs.unlink(req.files.avatar.path.split(avatar)[0]+req.session.user.avatar);
        // console.log('------------------------'+avatar+'upload ');
    }
    // console.log(gender+'_____________');
    try {
        if (!(name.length >= 1 && name.length <= 10)) {
            throw new Error('名字请限制在 1-10 个字符');
        }
        if (!(bio.length >= 1 && bio.length <= 30)) {
            throw new Error('个人简介请限制在 1-30 个字符');
        }
        if (password.length < 6&&password.length>=1) {
            throw new Error('密码至少 6 个字符');
        }
    } catch (e) {
        console.log("enter");
        fs.unlink(req.files.avatar.path);
        var c = req.flash('error', e.message);
        // console.log("------------------------"+c);
        return res.redirect('back');
    }
    if (password != '') {
        password = sha1(password);
        UserModel.updataUserById(req.session.user._id, {
                gender: gender,
                bio: bio,
                password: password,
                avatar: avatar
            })
            .then(function () {
                req.flash('success', '更改成功')
            })
            .catch(next);
    } else {
        UserModel.updataUserById(req.session.user._id, {
                gender: gender,
                bio: bio,
                avatar: avatar
            })
            .then(function () {
                req.flash('success', '更改成功')
            })
            .catch(next);
    }
    UserModel.getUserByName(name)
        .then(function (user) {
            req.session.user = user;
            res.redirect('/setting');
        }).catch(next);
});


module.exports = router;