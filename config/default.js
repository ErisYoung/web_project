module.exports = {
  port: 4000,
  session: {
    secret: 'myproject',
    key: 'myproject',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/myproject'
};