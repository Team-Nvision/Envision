const express = require('express');
const router = express.Router();

const Unit = require('../models/Unit');

router.get("/", (req,res) => {
    const newUnit = req.body;
    Unit.create(newUnit).then((units) => {
        res.json(units);
    })
})

router.post("/", (req,res) => {
    const newUnit = req.body; 
    Unit.create(newUnit).then((units) => {
        res.json(units);
    })
})

router.delete("/:id", async (req, res) => {
    try {
        const unitToDelete = await Unit.findByIdAndDelete(req.params.id);
        res.json(unitToDelete);
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;