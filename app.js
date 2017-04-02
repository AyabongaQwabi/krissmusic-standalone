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
app.listen(80)
