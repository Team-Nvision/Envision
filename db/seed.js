const mongoose = require('./connection');

const Unit = require('../models/Unit');

const unitSeeds = require('./unit.json')
Unit.insertMany(unitSeeds).then(unit => {
    console.log('success!', unit);
}).catch(console.error)
    .finally(() => {
        process.exit();
    })