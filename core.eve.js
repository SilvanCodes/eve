function Eve () {
    this.eventMap = new Map();
}

Eve.prototype = {
    constructor: Eve,
    on(event, fn) {
        (this.eventMap.has(event) ? this.eventMap : this.eventMap.set(event, new Set())).get(event).add(fn);
    },
    off(event, fn) {
        this.eventMap.has(event) && (fn ? this.eventMap.get(event).delete(fn) : this.eventMap.delete(event));
    },
    emit(event, ...data)  {
        const fns = this.eventMap.get(event);
        if (!fns) return;
        for (const [fn] of fns.entries()) {
            fn(...data);
        }
    }
}