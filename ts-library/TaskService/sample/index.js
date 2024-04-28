const taskSample = require('./taskSample');
const taskSchedule = require('../TaskSchedule');
taskSchedule.start();

taskSample.init();

taskSchedule.addTask(taskSample);