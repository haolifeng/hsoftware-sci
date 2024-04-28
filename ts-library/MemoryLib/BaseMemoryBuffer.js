class BaseMemoryBuffer {

    async init() { }

    async get(key) { }

    async set(key, value) { }

    async getAndUpdateSortSet(key, start, to) { }

    async setSortSet(key, value, scores = 0) { }

    async getSortSet(key, start, to) { }

    async removeFromSortSet(key, value) { }

    async countSortSet(key, start, to) { }

    async delete(key) { }

    async isInSortSet(key, value){}

    async removeFromSortSet(key,start,to){}
}

module.exports = BaseMemoryBuffer;