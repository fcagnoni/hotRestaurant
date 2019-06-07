const path = require('path');

module.exports = function (app){

    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, '/frontEnd/home.html'))
    });

    app.get('/tables', function(req, res) {
        res.sendFile(path.join(__dirname, '/frontEnd/tables.html'));
        console.log("view table page"); 
      });

    app.get('/reserve', function(req, res){
        res.sendFile(path.join(__dirname, '/frontEnd/reserve.html'));
        console.log("make reservation page");  
    });

  
};