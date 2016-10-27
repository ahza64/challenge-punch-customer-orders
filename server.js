
var express = require('express'),
    app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('server started on port 3000');
});
