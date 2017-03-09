
const path = require('path')
const express = require('express')

module.exports = {
  app: function () {
    const app = express();
    const indexPath = path.join(__dirname, '/public/index.html');
    const indexPathB = path.join(__dirname, '/public/loginb.html');
    const publicPath = express.static(path.join(__dirname, '/public'));
    

    app.use('/public', publicPath);
    app.get('/', function (_, res) { res.sendFile(indexPath) });
    app.get('/login_A', function (_, res) { res.sendFile(indexPath) });    
    app.get('/login_B', function (_, res) { res.sendFile(indexPathB) });
    
    // app.all('/notes/', (req, res) => {
    //   res.redirect('/notes');
    // });
    
    return app;
  }
}