function bind(asthis, ...args) {
    const fn = this
    return function (...args2) {
        return fn.call(asthis, ...args, ...args2)
    }
}

module.exports = bind

if (!Function.prototype.bind) {
    Function.prototype.bind = bind
}