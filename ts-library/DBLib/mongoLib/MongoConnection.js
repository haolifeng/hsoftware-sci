const mongoose = require('mongoose');

let dbOption = {

    useNewUrlParser: true,

    connectTimeoutMS: 30000,
    socketTimeoutMS: 360000
}

class MongoConnection {
    constructor(dbUrl,log){
        this.db = mongoose.createConnection(dbUrl,dbOption);
        this.db.on('error',(err)=>{
            log.info('MongoConnection e: ', err);


        })
    }

    getDB(){
        return this.db;
    }

}

module.exports = MongoConnection;
