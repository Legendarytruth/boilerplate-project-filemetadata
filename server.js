var express = require('express');
var cors = require('cors');
require('dotenv').config()
var multer = require("multer");

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.use(multer().single("upfile"));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post("/api/fileanalyse", (req, res) => {
  //console.log(req.file +" / "+ req.file.originalname +" / "+ req.file.mimetype +" / "+ req.file.size);
  res.send({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  });
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
