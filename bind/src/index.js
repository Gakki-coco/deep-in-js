function bind(asthis) {
    const fn = this
    return function () {
        return fn.call(asthis)
    }
}

module.exports = bind

if (!Function.prototype.bind) {
    Function.prototype.bind = bind
}