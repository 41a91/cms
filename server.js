var parth = require("path");
var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var bcrypt = require("bcryptjs");

var connection = mysql.createConnection({

   host: process.env.DBHOST,
   user: process.env.DBUSER,
   password: process.env.DBPASSWORD,
   database: process.env.DB

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

connection.query("select * from user",function(err,res)
{
    if(err)
    {
        console.log("err",err);
    }
    else
    {
        console.log("results",res);
    }
});





app.listen(port, () => {

    console.log("server is up on port : " + port);
});