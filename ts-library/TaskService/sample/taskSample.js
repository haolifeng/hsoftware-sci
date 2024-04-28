const BaseTask = require('../BaseTask');
const taskSchedule = require('../TaskSchedule');
class TaskSample extends BaseTask {
    constructor(){
        super();
        this.initTime = new Date().getTime();

    }
    init() {
        super.init();
        super.setPriority('tg');

    }
    setId() {
        this.Id = '1111';
    }
    getId(){
        return this.Id;
    }
    work(){
        console.log('in sample index work -- execute time:',this.executeTime );
    }
    setNextStartTime(time){
        this.nextStartTime = this.initTime + time;
    }
    async run(){
        this.work();
        taskSchedule.setFinishSuccess(this);
        let task = new TaskSample();
        task.init();
        task.setPriority('tg');
        task.setNextStartTime(2000);
        taskSchedule.addTask(task);
    }
}
let taskSample = new TaskSample();

module.exports = taskSample;