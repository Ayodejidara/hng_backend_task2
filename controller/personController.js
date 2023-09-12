const Person = require('./../model/personModel');

exports.createPerson = async (req,res) =>{
    try {
        const person = await Person.create({name: req.body.name});
        res.status(201).json(person);
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    };
};

exports.getPerson = async(req,res) =>{
    try {
        const personId = req.params.id;
        const person = await Person.findById(personId);

        if(!person) {
            return res.status(404).json({
                status: 'fail',
                message: 'Cannot find person with that ID!'
            });
        };
        res.status(200).json(person);
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    };
};

exports.updatePerson = async(req,res) =>{
    try {
        const personId = req.params.id;
        const person = await Person.findByIdAndUpdate(personId, req.body, {
            new: true,
            runValidators: true
        });

        if(!person) {
            return res.status(404).json({
                status: 'fail',
                message: 'No person found with ID!'
            });
        };
        res.status(200).json(person);
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    };
};

exports.deletePerson = async(req,res) =>{
    try {
        const person = await Person.findByIdAndDelete(req.params.id);
        if(!person) {
            return res.status(404).json({
                status: 'fail',
                message: 'No person found with ID'
            });
        };
 
        res.status(204).json({data: null})
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })   
    }
};