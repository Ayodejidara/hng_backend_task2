const express = require('express');

const router = express.Router();

const personController = require('./../controller/personController');

router.route('/')
.get(personController.getPeople)
.post(personController.createPerson);


router.route('/:id')
.get(personController.getSinglePerson)
.patch(personController.updatePerson)
.delete(personController.deletePerson);

module.exports = router;