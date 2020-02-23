const bind  = require('../src/index')

Function.prototype.bind2 = bind
console.assert(Function.prototype.bind2 !== undefined)

const fn1 = function() {
    return this
}
const newFn1 = fn1.bind2({name: 'Gakki'})
console.assert(newFn1().name === 'Gakki')


const fn2 = function(param1, param2) {
    return [this, param1, param2]
}

const newFn2 = fn2.bind2({name: 'Gakki'}, 123, 456)
console.assert(newFn2()[0].name === 'Gakki', 'this')
console.assert(newFn2()[1] === 123, 'param1')
console.assert(newFn2()[2] === 456, 'param2')

const anotherFn2 = fn2.bind2({name: 'Gakki'}, 111)
console.assert(anotherFn2(222)[0].name === 'Gakki', 'anotherThis')
console.assert(anotherFn2(222)[1] === 111, 'param111')
console.assert(anotherFn2(222)[2] === 222, 'param222')