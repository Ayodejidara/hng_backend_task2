const express = require('express');

const router = express.Router();

const personController = require('./../controller/personController');

router.route('/')
.post(personController.createPerson);


router.route('/:id')
.get(personController.getPerson)
.patch(personController.updatePerson)
.delete(personController.deletePerson);

module.exports = router;