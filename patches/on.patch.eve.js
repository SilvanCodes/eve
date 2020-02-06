Eve.prototype.on = function(event, ...fns) {
    (e => fns.map(f => e.add(f)))((this.eventMap.has(event) ? this.eventMap : this.eventMap.set(event, new Set())).get(event));
}
