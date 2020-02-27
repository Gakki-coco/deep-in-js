const bind  = require('../src/index')

test1('fn.bind 能用')
test2('this 绑定成功')
test3('this, p1, p2 绑定成功')
test4('this, p1 绑定成功, 后传 p2 调用成功')
test5('new 的时候绑定了 p1, p2')

function test1(message) {
    console.log(message)
    Function.prototype.bind2 = bind
    console.assert(Function.prototype.bind2 !== undefined)
}

function test2(message) {
    console.log(message)
    Function.prototype.bind2 = bind
    const fn1 = function () {
        return this
    }
    const newFn1 = fn1.bind2({ name: 'Gakki' })
    console.assert(newFn1().name === 'Gakki')
}

function test3(message) {
    console.log(message)
    Function.prototype.bind2 = bind
    const fn2 = function (param1, param2) {
        return [this, param1, param2]
    }
    const newFn2 = fn2.bind2({ name: 'Gakki' }, 123, 456)
    console.assert(newFn2()[0].name === 'Gakki', 'this')
    console.assert(newFn2()[1] === 123, 'param1')
    console.assert(newFn2()[2] === 456, 'param2')
}

function test4(message) {
    console.log(message)
    Function.prototype.bind2 = bind
    const fn2 = function (param1, param2) {
        return [this, param1, param2]
    }
    const anotherFn2 = fn2.bind2({ name: 'Gakki' }, 111)
    console.assert(anotherFn2(222)[0].name === 'Gakki', 'anotherThis')
    console.assert(anotherFn2(222)[1] === 111, 'param111')
    console.assert(anotherFn2(222)[2] === 222, 'param222')
}

function test5(message) {
    console.log(message)
    Function.prototype.bind2 = bind
    const fn = function (param1, param2) {
        this.param1 = param1
        this.param2 = param2
    }
    const fn2 = fn.bind2(undefined, 'x', 'y')
    const object = new fn2()
    console.log(object)
    console.assert(object.param1 === 'x', 'x')
    console.assert(object.param2 === 'y', 'y')
}
