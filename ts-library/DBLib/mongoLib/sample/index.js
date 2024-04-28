const dbUrl = 'mongodb://127.0.0.1:27017/haolfTest';
const MongoConnection = require('../MongoConnection');

const connection = new MongoConnection(dbUrl,console);
const db = connection.getDB();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DbAccess = require('../dbAccess');


const TestSchema = new Schema({
    title:{
        type:String,
        lowercase:true
    }
},{
    collection:'student'
});

const testModel = db.model('test', TestSchema);
const dbAccess = new DbAccess(console);

dbAccess.addDocument(testModel,{'title':"haolifengwang"})





