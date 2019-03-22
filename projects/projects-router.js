const express = require('express');

const projectsDB = require('../data/helpers/projectModel.js');

const router = express.Router();

// GET - retrieve project by id
router.get('/:id', async (req, res) => {
    try {
        const projects = await projectsDB.get(req.params.id);
        res.status(200).json(projects);
    } catch (error) {
        // console.log(error);
        res.status(500).json({ message: 'Error retrieving the projects.' })
    }
})

// GET - retrieve specific project actions
router.get('/:id/actions', async (req, res) => {
    try {
        const projects = await projectsDB.getProjectActions(req.params.id);
        res.status(200).json(projects);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error getting the actions for the project.' })
    }
});

// POST - add new project
router.post('/', async (req, res) => {
    try {
        const project = await projectsDB.insert(req.body);
        res.status(201).json(project);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error adding project.' });
    }
});

// DELETE - delete project
router.delete('/:id', async (req, res) => {
    try {
        const count = await projectsDB.remove(req.params.id);
        if (count > 0) {
            res.status(200).json({ message: 'The project has been deleted.' });
        } else {
            res.status(404).json({ message: 'The project could not be found.' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error removing the project.' });
    }
});

// PUT - change project
router.put('/:id', async (req, res) => {
    try {
        const project = await projectsDB.update(req.params.id, req.body);

        if (project) {
            res.status(200).json(project);
        } else {
            res.status(404).json({ message: 'The project could not be found.' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error updating the project.' });
    }
});

module.exports = router;