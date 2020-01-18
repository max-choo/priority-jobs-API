const express = require('express');

const pq_module = require('../modules/priority_queue');
const PriorityQueue = pq_module.modules.PriorityQueue;

const queue = new PriorityQueue();
const router = express.Router();

insertJob = (req, res, next) => {
    const jobid = parseInt(req.params.jobid);
    const severity = parseInt(req.params.severity);
    queue.enqueue(jobid, severity);

    queue.printPQueue();
    next();
}

deleteJob = (req, res, next) => {
    const jobid = parseInt(req.params.jobid);
    queue.deleteById(jobid);

    queue.printPQueue();
    next();
}

topJob = (req, res, next) => {
    console.log(queue.peek().id);
    next();
}

allJobs = (req, res, next) => {
    joblist = [];
    for (let i=0; i < queue.items.length; i++) {
        joblist.push(queue.items[i].id);
    }
    console.log(joblist);
    next();
}

jobsCount = (req, res, next) => {
    console.log(queue.items.length);
    next();
}

// insert a job
router.post('/:jobid/:severity', insertJob);

// delete a job
router.delete('/:jobid', deleteJob);

// return the highest priority job
router.get('/top', topJob);

// return the list of jobs
router.get('/all', allJobs);

// return the number of jobs on queue
router.get('/count', jobsCount);

module.exports = router;
