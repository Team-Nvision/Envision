const express = require('express');
const router = express.Router();

const Chapter = require('../models/Chapter');
const { collection } = require('../models/Unit');
// const Unit = require('../models/Unit');

// router.get("/", (req,res) => {
//   const newChapter = req.body;
//   Chapter.create(newChapter).then((chapters) => {
//       res.json(chapters);
//   })
// })

router.post("/unit/:id", (req,res) => {
  const newChapter = req.body; 
  Unit.findById(req.params.id)
    .then((unit) => {
        unit.item.push(newChapter);

        return unit.save();
    })
    .then((units) => res.status(201).json(units)).catch(next);
  })

  router.put("/units/:id", (req, res, next) => {
      const id = req.params.id;
      const chapterData= req.body
      Unit.findOne({'chapter._id': id })
        .then((unit) => {
            const chapter = unit.chapter.id(id);
            chapter.set(chapterData);
            return unit.save();
        }).then(() => 
            res.sendStatus(200)).catch(next)
  })

router.delete("/units/:id/:chapterId", async (req, res) => {

    Unit.findByIdAndUpdate(
        { _id: req.params.id},
        {$pull: {chapter: {_id: req.params.chapterId}}},
        {new: true},
        function(err){
            if(err) {console.log(err)}
        },
    )
//   try {
//       const chapterToDelete = await Chapter.findByIdAndUpdate(req.params.id);
//       res.json(chapterToDelete);
//   } catch (error) {
//       console.log(error)
//   }
})

module.exports = router;