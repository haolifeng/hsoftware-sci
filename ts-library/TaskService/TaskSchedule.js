
const TaskQueue =  require('./TaskQueue');
const config = require('./config');

class TaskSchedule{
    constructor(){
        this.taskQueue = new TaskQueue();
    }
    start(){
        setTimeout(this.taskCheckHandler.bind(this),config.interval);
    }
    taskCheckHandler(){
        //fg
        let taskFgs = this.taskQueue.selectFgTask();
        if(taskFgs){
            for(let i = 0;i< taskFgs.length;i++){
                taskFgs[i].run();
            }
        }
        //bg
        let taskBg = this.taskQueue.selectBgTask();
        if(taskBg){
            taskBg.run();
        }

        //tg-- can run multiple
        let taskTgs = this.taskQueue.selectTgTask();
        if(taskTgs){
            for(let i = 0;i< taskTgs.length;i++){
                taskTgs[i].run();
            }

        }
        setTimeout(this.taskCheckHandler.bind(this),config.interval);
    }
    addTask(_concreteTask){
        this.taskQueue.addTask(_concreteTask);
    }
    setFinishSuccess(_concreteTask){
        _concreteTask.setStatus('finish-sus');
        this.taskQueue.setTaskFinish(_concreteTask);

    }
    setFinishFail(_concreteTask) {
        _concreteTask.setStatus('finish-fail');
        this.taskQueue.setTaskFinish(_concreteTask);

    }
}



let taskSchedule = new TaskSchedule();
module.exports = taskSchedule;
