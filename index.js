const express = require("express");
const cors = require("cors");
const app = express();
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
// session middleware
var session = require('express-session');
var passport = require('passport');
var methodOverride = require('method-override');
app.set("port", process.env.PORT || 8000);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get("/", (req,res) => {
    return res.redirect("/api/units")
})

app.listen(app.get("port"), () => {
    console.log( `PORT: ${app.get("port")}`);
});