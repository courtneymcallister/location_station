var express = require('express');
var server = express();
var port = process.env.PORT || 8080;
var axios = require('axios');
var apiKey = require('./secrets').geocodeAPIKey;


//typicode
server.get('/posts/:postId', function(req, res){
  var postId = req.params.postId;
  var url = `https://jsonplaceholder.typicode.com/posts/${postId}`

  axios.get(url)
     .then(function(response){
        res.send(response.data);
     })
     .catch(function(err){
        res.send(err);
     });
});

//geocode
server.get('/location/:address', function(req, res){
  var address = req.params.address;
  var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`

  axios.get(url)
     .then(function(response){
        res.send(response.data);
     })
     .catch(function(err){
        res.send(err);
     });
});

server.listen(port, function(){
  console.log("Now listening on port", port);
});
