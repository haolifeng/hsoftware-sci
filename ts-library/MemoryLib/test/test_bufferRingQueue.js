
const BufferRingQueue = require('./BufferRingQueue');

const bufferQueue = new BufferRingQueue(5);

class TestObj{
    constructor(name){
        this.name = name
    }
    test(){
        console.log('hello world -- i: ',this.name);
    }
};

for(let i = 0 ;i<5;i++){
    bufferQueue.push(new TestObj(i));
}

console.log(`buffer size is : ${bufferQueue.size()}`);
console.log(`buffer isFull : ${bufferQueue.isFull()}`);
console.log(`buffer isEmpty : ${bufferQueue.isEmpty()}`);

let ret =  bufferQueue.push(new TestObj(5));
console.log('ret ', ret);

for(let i = 0; i<5;i++){
    let to = bufferQueue.pop();
    to.test();
}

console.log(`buffer size is : ${bufferQueue.size()}`);
console.log(`buffer isFull : ${bufferQueue.isFull()}`);
console.log(`buffer isEmpty : ${bufferQueue.isEmpty()}`);

ret =  bufferQueue.pop();
console.log('ret ', ret);