
const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const { notes } = require("../../db/db.json");

router.get('/notes', (req, res) => {
    let results = notes
    res.json(results);
});
router.post('/notes', (req, res) => {
    const note = req.body
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, "../../db/db.json"),
        JSON.stringify({ notes }, null, 2)
    );
    res.json(note);
});



module.exports = router;