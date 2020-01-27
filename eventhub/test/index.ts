import EventHub from '../src/index'

const eventHub = new EventHub()

console.assert(eventHub instanceof Object === true, 'eventHub是个对象')

let called = false
eventHub.on('xxx', (y)=> {
    called = true
    console.log('called:', called)
    console.assert(y === '今天冠状病毒爆发了')
})

eventHub.emit('xxx', '今天冠状病毒爆发了')

const eventHub2 = new EventHub()
let called2 = false
const fn1 = () => {
    called2 = true
}
eventHub2.on('yyy', fn1)
eventHub2.off('yyy', fn1)
eventHub2.emit('yyy')
setTimeout(()=> {
    console.log(called2)
}, 1000)