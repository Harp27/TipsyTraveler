const express = require("express");
const Bar = require("../models/bars.js");

const router = express.Router()



router.get('/:id', async (req, res) => { 
    const id = req.params.id;
    const bar = await Bar.findById(id)
    res.render('bars/show.ejs', { bar }
    )
})

module.exports = router