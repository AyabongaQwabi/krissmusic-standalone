var http = require("http");
var pageHtml=''
 http.get({
        host: 'krissmusic.tk',
        path: '/api/standalone/app'
    }, function(response) {
        //console.log(response)
        var body = '';
        response.on('data', function(d) {
            body += d;

        });
        response.on('end', function() {

            // Data reception is done, do whatever with it!
            pageHtml = body;

        });
    });

var express = require('express');
var app = express();
app.get('/',function(req,res){
  res.send(pageHtml.toString())
})
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
