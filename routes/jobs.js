const express = require('express');

const pq_module = require('../modules/priority_queue');
const PriorityQueue = pq_module.modules.PriorityQueue;

const queue = new PriorityQueue();
const router = express.Router();

insertJob = (req, res, next) => {
    const jobid = req.params.jobid;
    const severity = req.params.severity
    queue.enqueue(jobid, severity);

    queue.printPQueue();
}

deleteJob = (req, res, next) => {
    const jobid = req.params.jobid;
    queue.deleteByItem(jobid);

    queue.printPQueue();
}

// insert a job
router.post('/:jobid/:severity', insertJob);

// delete a job
router.delete('/:jobid', deleteJob);


module.exports = router;