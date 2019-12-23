Eve.prototype.ons = function(obj) {
    Object.entries(obj).forEach(([event, fns]) => fns.length ? this.on(event, ...fns) : this.on(event, fns));
}