var path = require('path');
var express = require('express');
var app = express();
var router = express.Router();

var PORT = process.argv[2] || 9000;

app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, () => {
    console.log(`serving public on ${PORT}`);
});
