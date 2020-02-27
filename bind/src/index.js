function _bind(asThis, ...args) {
    const fn = this
    return function (...args2) {
        return fn.call(asThis, ...args, ...args2)
    }
}

// 兼容IE
var slice = Array.prototype.slice
function bind(asThis) {
    // 第一个参数不要，从 asThis 拿
    var args = slice.call(arguments, 1)
    var fn = this
    if (typeof fn !== 'function') {
        throw new Error('bind 必须调用在函数上')
    }
    return function resultFn() {
        var args2 = slice.call(arguments, 0)
        return fn.apply(this.__proto__ === resultFn.prototype ? this : asThis, args.concat(args2))
    }
}

// new fn() 做了四件事
// 1. var temp = {}
// 2. temp.__proto__ = fn.prototype
// 3. fn.call(temp, 'x')
// 4. fn 函数体里 return this

module.exports = bind

if (!Function.prototype.bind) {
    Function.prototype.bind = bind
}