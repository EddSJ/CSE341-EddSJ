const express = require('express');
const router = express.Router();

const contactSchema = require('../models/contact');

//create a new uyser entry
router.post('/create', (req, res) => {
    const contactEntry = contactSchema(req.body);
    contactEntry
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
});

//get all the contactds from DB
router.get('/get-all', (req, res) => {
    contactSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//get a contact by id
router.get('/get-one/:id', (req, res) => {
    const { id } = req.params;
    contactSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

module.exports = router;