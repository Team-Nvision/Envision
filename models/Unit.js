const mongoose = require('../db/connection');

const chapterSchema = require("./Chapter");


const UnitSchema = new mongoose.Schema({
    title: [String],
    chapter: [chapterSchema], 

})

const Unit = mongoose.model('Unit', UnitSchema);

module.exports = Unit;