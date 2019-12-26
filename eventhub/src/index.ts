class EventHub {
    cache = {}
    // {
    //     '楚天都市报': [fn1, fn2, fn3],
    //     '羊城晚报': [fn2, fn2, fn3]
    // }
    on(eventName, fn) {
        // 把 fn 推进 this.cache[eventName] 数组
        if (this.cache[eventName] === undefined) {
            this.cache[eventName] = []
        }
        this.cache[eventName].push(fn)
    }
    emit(eventName) {
        // 把 this.cache[eventName] 数组里面的 fn 全部依次调用
        let array = this.cache[eventName]
        if (array === undefined) {
            array = []
        }
        array.map(fn => {
            fn()
        })
    }
}

export default EventHub