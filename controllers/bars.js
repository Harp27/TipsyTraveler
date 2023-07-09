const express = require("express");
const Bar = require("../models/bars.js");

const router = express.Router()

router.get('/', async (req, res) => { 
    const allBars = await Bar.find({})
    res.render('bars/index.ejs', { bars: allBars }
    )
})

router.get("/new", (req, res) => {
    res.render('bars/new.ejs')
})

router.post("/", async (req, res) => {

    const newBar = new Bar({
      barName: req.body.barName,
      drink: {
        picture: req.body.drink.picture,
        description: req.body.drink.description
      },
      walkabilityScore: req.body.walkabilityScore, 
      crimeRate: req.body.crimeRate,
      ageRequirement: req.body.ageRequirement,
      population: req.body.population
    });
  
    await newBar.save();
    res.redirect("/bar");
  });

router.get('/:id', async (req, res) => { 
    const id = req.params.id;
    const bar = await Bar.findById(id)
    res.render('bars/show.ejs', { bar }
    )
})

module.exports = router