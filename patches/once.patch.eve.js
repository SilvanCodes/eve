Eve.prototype.once = function (event, fn) {
    const self = this;
    this.on(event, function once(...data) { self.off(event, once); fn(...data); });
}
