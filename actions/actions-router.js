const express = require('express');

const actionsDB = require('../data/helpers/actionModel.js');

const router = express.Router();

// GET - retrieve action by id
router.get('/:id', async (req, res) => {
    try {
        const actions = await actionsDB.get(req.params.id);
        res.status(200).json(actions);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error retrieving the actions' });
    }
});

// POST - add new action
router.post('/', async (req, res) => {
    try {
        const action = await actionsDB.insert(req.body);
        res.status(201).json(action);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error adding action.' })
    }
});

// DELETE - delete action
router.delete('/:id', async (req, res) => {
    try {
        const count = await actionsDB.remove(req.params.id);
        if (count > 0) {
            res.status(200).json({ message: 'The action has been deleted.' });
        } else {
            res.status(404).json({ message: 'The action could not be found.' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error removing action.' });
    }
});



module.exports = router;