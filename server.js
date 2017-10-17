var parth = require("path");
var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var bcrypt = require("bcryptjs");

var connection = mysql.createConnection({

   host: DBHOST,
   user: DBUSER,
   password: DBPASSWORD,
   database: DB

});

var port = process.env.PORT || 8080;
var publicPath = path.join(__dirname, "public");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(session({secret: "**Dennis is cool*??",resave:true,saveUninitialized:true}));


app.listen(port, () => {

    console.log("server is up on port : " + port);
});