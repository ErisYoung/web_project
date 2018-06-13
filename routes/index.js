module.exports = function (app) {
  app.get('/', function (req, res) {
    res.redirect('/home');
  });
  app.use('/signup', require('./signup'));
  app.use('/signin', require('./signin'));
  app.use('/signout', require('./signout'));
  app.use('/home', require('./home'));
  // app.use('/com', require('./com'));
  app.use('/setting', require('./setting'));
  // 个人主页
  app.use('/posts', require('./posts'));
  // 404 page
  app.get('/404',function(req,res){
    res.render('404');
  });
  app.use(function (req, res) {
    if (!res.headersSent) {
      res.redirect('/404');
    }
  });
  
};