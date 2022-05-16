const express = require("express");
const cors = require("cors");
const app = express();
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