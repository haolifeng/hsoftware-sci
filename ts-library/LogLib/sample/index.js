const Logger = require('../logger');

const testLogger = new Logger('test','./test.log','test_error.log','info');

testLogger.info('test  --- 1');
testLogger.error('test --- 2');