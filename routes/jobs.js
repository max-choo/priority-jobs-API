const express = require('express');

const jobsController = require('../controllers/jobs');

const router = express.Router();

// insert a job
router.post('/:jobid', jobsController.insertJob);

// delete a job
//router.delete('/:jobid', jobsController.deleteJob);

module.exports = router;