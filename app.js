const express = require('express');

const jobsRoute = require('./routes/jobs.js');

const app = express();

app.use('/jobs', jobsRoute);

app.listen(8080);