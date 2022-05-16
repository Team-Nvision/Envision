const mongoose = require('../db/connection');


const ChapterSchema =new mongoose.Schema({
    title: [String],
    text: [String], 
})

module.exports = ChapterSchema;