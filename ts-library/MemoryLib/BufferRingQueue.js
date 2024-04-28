const RingBuffer = require('ringbufferjs');

class BufferRingQueue{
    constructor(maxLen){
        this.maxLen = maxLen;
        this.dataBuffer = new RingBuffer(this.maxLen);
    }
    isFull(){
        return this.dataBuffer.isFull();
    }
    isEmpty(){
        return this.dataBuffer.isEmpty();
    }
    size(){
        return this.dataBuffer.size();
    }
    push(element){
        if(this.dataBuffer.isFull()){
            return false;
        }else{
            this.dataBuffer.enq(element);
            return true;
        }

    }
    pop(){
        if(this.dataBuffer.isEmpty()){
            return null;
        }else{
            let data = this.dataBuffer.peek();
            this.dataBuffer.deq();
            return data;
        }

    }

}

module.exports = BufferRingQueue;