var express = require("express");
var middleware = require("./middleware");
var app = express();
var PORT = process.env.PORT || 7000;

/*var middleware = {
    requireAuthentication: (req, res, next) => {
        console.log("Private route entered");
        next();
    },
    logger: (req, res, next) => {
        console.log(req.method+ " " +req.originalUrl);
        next();
    }
}*/

/*app.get("/", (req,res) => {
    res.send("Hello Express");
});*/

//app.use(middleware.requireAuthentication); //application seviyesinde middleware

app.use(middleware.logger);

/*app.get("/about", middleware.requireAuthentication, middleware.logger, (req,res) => { //route seviyesinde middleware
    res.send("About Page");
});*/

app.get("/about", middleware.requireAuthentication, (req,res) => { //route seviyesinde middleware
    res.send("About Page");
});

app.use(express.static(__dirname+"/public"));

//console.log(__dirname);

app.listen(PORT, () => console.log("Express server started at " +PORT +" port."));

