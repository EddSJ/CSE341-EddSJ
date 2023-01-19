const express = require('express');
const router = express.Router();

const contactSchema = require('../models/contact');

//create a new uyser entry
router.post('/create', (req, res) => {
    const contactEntry = contactSchema(req.body);
    contactEntry
        .save()
        .then((data) => res.json({ 
            message: {
                id: data.id,
                status: 201
            }
        }))
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

//update an user info
router.put('/update/:id', (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;
    contactSchema
        .updateOne({ _id: id }, { $set: {firstName, lastName, email, favoriteColor, birthday}})
        .then((data) => res.json({ message: {status: 204, data} }))
        .catch((error) => res.json({message: error}))
});

//delete a contact
router.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    contactSchema
        .remove({_id: id})
        .then((data) => res.json({message: {
            status: 200, data
        }}))
});

module.exports = router;