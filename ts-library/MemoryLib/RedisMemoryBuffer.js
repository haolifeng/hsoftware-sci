const BaseMemoryBuffer = require('./BaseMemoryBuffer');
const redis = require('redis');

class RedisMemoryBuffer extends BaseMemoryBuffer {
    constructor(ip, port){
        super();
        this.ip = ip;
        this.port = port;
        this.redisClient = redis.createClient(this.port, this.ip);

        this.redisClient.on('ready',(ret)=>{
            console.log('redisClient -- ready:', ret);

        }).on('error',(error)=>{
            console.log('redisClient -- error: ', error);
        })

    }
    async getMap(key) {
        if (!key) return;
        return await new Promise((resolve, reject) => {
            this.client.hgetall(key, (err, res) => {
                if (err)
                    reject(err);
                else {
                    let ret = {};
                    for (const key in res) {
                        ret[key] = JSON.parse(res[key]);
                    }
                    resolve(ret);
                }
            })
        })

    }

    async setMap(key, field,value) {

        return await new Promise((resolve, reject) => {
            this.client.hset(key,field,JSON.stringify(value), (err, res) => {
                if (err)
                    reject(err);
                else {
                    resolve(res);
                }
            })
        })
    }

    async get(key) {
        if (!key) return;
        return await new Promise((resolve, reject) => {
            this.client.get(key, (err, res) => {
                if (err)
                    reject(err);
                else {
                    let ret = JSON.parse(res);
                    resolve(ret);
                }
            })
        })

    }

    async getMulti(keys) {
        if (keys.length <= 0) return [];
        return await new Promise((resolve, reject) => {
            this.client.mget(keys, (err, res) => {
                if (err)
                    reject(err);
                else {
                    let ret = [];
                    for (let index = 0; index < res.length; index++) {
                        const element = res[index];
                        ret.push(JSON.parse(element));
                    }

                    resolve(ret);
                }
            })
        })
    }

    async setMulti(keys, values) {
        if (keys.length <= 0) return [];
        if (keys.length !== values.length) throw 'the count of keys is not equal the count of values';
        let args = [];

        for (let index = 0; index < keys.length; index++) {
            args.push(keys[index]);
            args.push(JSON.stringify(values[index]));
        }

        return await new Promise((resolve, reject) => {
            this.client.mset(args, (err, res) => {
                if (err)
                    reject(err);
                else {
                    resolve(res);
                }
            })
        })
    }

    async delete(key) {
        if (!key) return true;

        return await new Promise((resolve, reject) => {
            this.client.del(key, (err, res) => {
                if (err)
                    reject(err);
                else {
                    resolve(true);
                }
            })
        })
    }

    async set(key, value) {
        return await new Promise((resolve, reject) => {
            this.client.set(key, JSON.stringify(value), (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(true);
            })
        })

    }

    async getAndUpdateSortSet(key, start, to) {
        // if(!key) return;
        let self = this;
        if (!start) start = 0;
        if (!to) to = -1;

        return await new Promise((resolve, reject) => {
            this.client.zrange(key, start, to, (err, res) => {
                if (err) reject(err);
                else {
                    let req = [];
                    let scores = Date.now();
                    for (let index = 0; index < res.length; index++) {
                        req.push(scores);
                        req.push(res[index]);
                    }
                    if (req.length) {
                        self.client.zadd(key, req, (err, n) => {
                            if (err) reject(err);
                            else {
                                let result = [];
                                for (let index = 0; index < res.length; index++) {
                                    const element = res[index];
                                    result.push(JSON.parse(element));
                                }
                                resolve(result);
                            }
                        })
                    } else {
                        resolve([]);
                    }
                }
            })
        })


    }

    async getAndUpdateSortSetByScore(key, start, to) {
        // if(!key) return;
        let self = this;
        if (!start) start = 0;
        if (!to) to = -1;

        return await new Promise((resolve, reject) => {
            this.client.zrangebyscore(key, start, to, (err, res) => {
                if (err) reject(err);
                else {
                    let req = [];
                    let scores = Date.now();
                    for (let index = 0; index < res.length; index++) {
                        req.push(scores);
                        req.push(res[index]);
                    }
                    if (req.length) {
                        self.client.zadd(key, req, (err, n) => {
                            if (err) reject(err);
                            else {
                                let result = [];
                                for (let index = 0; index < res.length; index++) {
                                    const element = res[index];
                                    result.push(JSON.parse(element));
                                }
                                resolve(result);
                            }
                        })
                    } else {
                        resolve([]);
                    }
                }
            })
        })


    }

    async getSortSet(key, start, to) {
        if (!key) return [];
        // let self = this;
        if (!start) start = 0;
        if (!to) to = -1;

        return await new Promise((resolve, reject) => {
            this.client.zrange(key, start, to, (err, res) => {
                if (err) reject(err);
                else {
                    let result = [];
                    for (let index = 0; index < res.length; index++) {
                        const element = res[index];
                        result.push(JSON.parse(element));
                    }
                    resolve(result);
                }
            })
        })

    }

    async countSortSet(key, start, to) {
        if (!key) return false;
        return await new Promise((resolve, reject) => {
            this.client.zcount(key, start, to, (err, res) => {
                if (err) reject(err);
                else {
                    resolve(res);
                }
            })
        })
    }

    async setSortSet(key, value, scores = 0) {
        if (!key) return false;
        let v = JSON.stringify(value);
        return await new Promise((resolve, reject) => {
            this.client.zadd(key, scores, v, (err, res) => {
                if (err) reject(err);
                else {
                    resolve(true);
                }
            })
        })
    }

    async isInSortSet(key, value) {
        if (!key) return false;
        let v = JSON.stringify(value);
        return await new Promise((resolve, reject) => {
            this.client.zscore(key, v, (err, res) => {
                if (err) reject(err);
                else {
                    resolve(!(res === null));
                }
            })
        })
    }

    async removeFromSortSet(key, value) {
        if (!key) return true;
        let v = JSON.stringify(value);

        return await new Promise((resolve, reject) => {
            this.client.zrem(key, v, (err, res) => {
                if (err) reject(err);
                else {
                    resolve(true);
                }
            })
        })
    }

    async removeRangeFromSortSet(key, start, to) {
        if (!key) return true;
        // if(start === undefined || to === undefined){
        //     console.log('78987897');
        // }
        return await new Promise((resolve, reject) => {
            this.client.zremrangebyscore(key, start, to, (err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(true);
                }
            })
        })
    }

}

module.exports = RedisMemoryBuffer;