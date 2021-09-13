const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const connectFlash = require('connect-flash');
const session = require('express-session');
const pizzaCart = require('./PizzaCart');
const pg = require("pg");
const Pool = pg.Pool;


let useSSL = false;
let local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local){
    useSSL = true;
} 

const connectionString = process.env.DATABASE_URL || 'postgresql://codex:codex123@localhost:5000/my_pizzacart';

const pool = new Pool({
    connectionString,
    ssl : useSSL
  });
   
const pizzacart = pizzaCart()

const app = express();

// add more middleware to allow for templating support
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ 
	partialsDir: "./views/partials", 
	viewPath: './views', 
	layoutsDir: './views/layouts' 
	}));

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));	


app.use(session({
    secret : "<add a secret string here>",
    resave: false,
    saveUninitialized: true
  }));



// enable the static folder...
app.use(express.static('public'));



// app.engine('handlebars', exphbs());


let counter = 0;

app.get('/', function(req, res) {
	res.render('index', {
		counter
	});
});

app.post('/count', function(req, res) {
	counter++;
	res.redirect('/')
});

const PORT =  process.env.PORT || 3017;
// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function() {
	console.log(`App started on port ${PORT}`)
});