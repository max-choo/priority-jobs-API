const queue = require('node-priority-queue');
queue.createEmptyQueue();

exports.insertJob = (req, res, next) => {
    const jobId = req.params.jobid;
    queue.addElement(jobId)

    console.log(queue.getQueue());
}