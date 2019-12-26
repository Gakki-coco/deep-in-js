import EventHub from '../src/index'

const eventHub = new EventHub()

console.assert(eventHub instanceof Object === true, 'eventHub是个对象')

let called = false
eventHub.on('xxx', ()=> {
    called = true
    console.log('被调用')
    console.log(called)
})

eventHub.emit('xxx')