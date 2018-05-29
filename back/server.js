
let express = require('express');
let path = require ('path');
let exphbs = require('express-handlebars');

let app = express();
let port = 6700;

app.engine('.hbs', exphbs({defaultLayout: 'single', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.get('/', function (req, res) {
    res.render('index', {msg: 'hello :)'});
});

app.listen(port);
console.log('Server running on port %s', port);