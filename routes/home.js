var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require("fs");
var router = express.Router();
var checkLogin = require('../middlewares/check').checkLogin;

var https = require('https');
var _url = require('url');
var cheerio = require("cheerio");
var iconv = require('iconv-lite');
var BufferHelper = require('bufferhelper');
// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', function (req, res, next) {
    // console.log("hah");
    // console.log(req.fields.search+'==============');
    console.log("dadad");
    res.render('home', {
        data: null
    });
});
router.post('/', function (req, res, next) {
    // console.log(JSON.stringify(req.body)+'---------');  
    // console.log(req.query.id+'---------id');
    // console.log("yesdasd"+JSON.stringify(req.body)+'-------------------------');
    var bia = [{
        hha: 1,
        title: 2
    }, {
        hha: 3,
        title: 4
    }];
    console.log("second");
    console.log(req.fields);
    var tes = "<h1>" + bia.hha + "</h1><h2>" + bia.hha + "</h2>";
    res.send(bia);
    // res.render('home',{data:bia});
    // res.render('home');
});
router.post('/search', function (req, res, next) {
    var searchword = req.fields.searchword;

    console.log(searchword + '---------------------');

    // 在StackOverflow里抓取数据
    var opt = {
        // hostname: 'github.com',
        hostname: 'stackoverflow.com',
        // path: '/search?q='+searchword,
        // path: '/questions/tagged/'+searchword,
        path: '/questions/tagged/' + searchword + '?sort=frequent&pageSize=15',
        // https://stackoverflow.com/questions/tagged/mongodb?sort=newest&pagesize=30
        // https://stackoverflow.com/search?tab=Relevance&pagesize=30&q=http.get
        // https://stackoverflow.com/questions/tagged/mongodb?sort=frequent&pageSize=30
        port: 443
    };

    https.get(opt, function (_res) { //资源请求
        var html = ''; // 保存抓取到的 HTML 源码
        var questions = []; // 保存解析 HTML 后的数据，即我们需要的问题和解答信息
        _res.setEncoding('utf-8');

        // 抓取页面内容
        _res.on('data', function (chunk) {
            html += chunk;
        });

        _res.on('end', function () {

            var $ = cheerio.load(html);
            // console.log(html);
            $(".summary").each(function () {
                var question = {
                    link: 'https://stackoverflow.com/' + $("h3 a", this).attr("href"),
                    title: $("h3 a", this).text(),
                    excerpt: $(".excerpt",this).text()
                };
                questions.push(question);
            });
            console.log(questions);
            res.send(questions);
            // for (var i = 0; i < num; i++) {
            //     // console.log(questions[i].link);
            //     console.log("---------------------------"+i);
            //     https.get(questions[i].link, function (_res) {
            //         var html = '';
            //         _res.setEncoding('utf-8');

            //         _res.on('data', function (chunk) {
            //             html += chunk;
            //         });
            //         _res.on('end', function () {
            //             var $ = cheerio.load(html);
            //             // console.log(html);
            //             var answer = {
            //                 detail: $(".post-text").eq(0).html(),
            //                 adoptAnswer: $(".post-text").eq(1).html()
            //             }
            //             // console.log("inside---------------------------");
            //             sendAnswers.push(answer);
            //             console.log(sendAnswers);
            //             console.log("---------------------------"+i);
            //             if(i==num-1)
            //             {   
            //                 console.log(sendAnswers);
            //                 res.send(sendAnswers);
            //             }
            //         });
            //     });
            // }

            // 解析页面
            // $('.item').each(function () {
            //     var movie = {
            //         //this 为当前遍历的title
            //         title: $('.title', this).text(), // 获取电影名称
            //         star: $('.info .star .rating_num', this).text(), // 获取电影评分
            //         link: $('a', this).attr('href'), // 获取电影详情页链接
            //         picUrl: $('.pic img', this).attr('src'), // 获取电影图片链接
            //         // test: result
            //     };
            //     // 把所有电影放在一个数组里面
            //     movies.push(movie);
            // });
            // $(".detail").each(function(){
            //     console.log($('.title a',this).text());
            // });
            // console.log(movies);
        });
    }).on('error', function (err) {
        console.log(err);
    });
});

module.exports = router;