const Heap = require("./BinaryHeap");
class TaskQueue{
    constructor(props) {

        this.taskAllTaskMap = new Map();

        this.taskBgWaitHeap = new Heap(function(task){
            return task.requestTime;
        });
        this.taskBgRunningTaskMap = new Map();

        this.taskFgWaitHeap = new Heap(function(task){
            return task.requestTime;
        });
        this.taskFgRunningTaskMap = new Map();

        this.taskTgWaitHeap = new Heap(function(task){  //small top heap
            return task.nextStartTime;
        });
        this.taskTgRunningTaskMap = new Map();

    }
    addTask(_concreteTask){
        if(!_concreteTask){
            return false;
        }
        let proprity = _concreteTask.getPriority();
        let id = _concreteTask.getId();

        if(this.taskAllTaskMap.has(id)){

            let oldTask = this.taskAllTaskMap.get(id);
            oldTask.setRequestTime();
            return false;
        }else {
            this.taskAllTaskMap.set(id, _concreteTask);
            _concreteTask.setRequestTime();
            switch (proprity) {
                case 'bg':

                    this.taskBgWaitHeap.push(_concreteTask);
                    break;
                case 'fg':

                    this.taskFgWaitHeap.push(_concreteTask);
                    break;
                case 'tg':
                    this.taskTgWaitHeap.push(_concreteTask);
                    break;
            }
        }
    }

    setTaskFinish(_concreteTask){


        let id = _concreteTask.getId();

        let priority = _concreteTask.getPriority();
        let requestTime = _concreteTask.getRequestTime();
        let exectueTime = _concreteTask.getExecuteTime();

        if(requestTime> exectueTime){ //normal situation, the executeTime > requestTime

            let result =  _concreteTask.isRepeated();
            if(result){ //if is repeated time, will discard
                this.taskAllTaskMap.delete(id); //normal
                switch(priority){
                    case 'bg':
                        this.taskBgRunningTaskMap.delete(id);
                        break;
                    case 'fg':
                        this.taskFgRunningTaskMap.delete(id);
                        break;
                    case 'tg':
                        this.taskTgRunningTaskMap.delete(id);
                        break;
                }
            }else{ // need continue to run
                _concreteTask.setRequestTime();
                switch (priority) {
                    case 'bg':
                        this.taskBgRunningTaskMap.delete(id);
                        this.taskBgWaitHeap.push(_concreteTask); // -- push wait heap again
                        break;
                    case 'fg':
                        this.taskFgRunningTaskMap.delete(id);
                        this.taskFgWaitHeap.push(_concreteTask);
                        break;
                    case 'tg':
                        this.taskTgRunningTaskMap.delete(id);
                        this.taskTgWaitHeap.push(_concreteTask);
                        break;
                }
            }

        }else{

            this.taskAllTaskMap.delete(id); //normal
            switch(priority){
                case 'bg':

                    this.taskBgRunningTaskMap.delete(id);
                    break;
                case 'fg':

                    this.taskFgRunningTaskMap.delete(id);
                    break;
                case 'tg':

                    this.taskTgRunningTaskMap.delete(id);
                    break;
            }
        }
    }

    ///////////////////////////////////////////////////
    selectFgTask(){
        if(this.taskFgWaitHeap.length() === 0){
            return null;
        }else{
            let tasks = [];
            while(this.taskFgWaitHeap.length() > 0){

                let task = this.taskFgWaitHeap.pop();
                task.setExecuteTime();
                tasks.push(task);
            }
            return tasks;

        }
    }

    selectBgTask(){
        if(this.taskBgRunningTaskMap.size !== 0){
            return null;
        }else{
            if(this.taskBgWaitHeap.length() === 0){
                return null;
            } else{
                let task =  this.taskBgWaitHeap.pop();
                if(task){
                    task.setExecuteTime();

                    let id = task.getId();
                    this.taskBgRunningTaskMap.set(id,task);
                    return task;
                }else{
                    return null;
                }

            }
        }
    }
    selectTgTask(){
        if(this.taskTgWaitHeap.length() === 0){
            return null;
        }else {
            let tasks = [];
            let currentTime = new Date().getTime();
            let task = this.taskTgWaitHeap.peek();
            if(task){
                while(task.nextStartTime< currentTime){

                    task.setExecuteTime();
                    tasks.push(task);
                    let id = task.getId();
                    this.taskTgRunningTaskMap.set(id,task);
                    this.taskTgWaitHeap.delete(task);
                    task = this.taskTgWaitHeap.peek();
                    if(!task){
                        break;
                    }
                }
            }

            return tasks;
        }
    }



}

module.exports = TaskQueue;