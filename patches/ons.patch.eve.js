Eve.prototype.ons = function (obj) {
  Object.entries(obj).forEach(([event, fns]) =>
    Array.isArray(fns) ? this.on(event, ...fns) : this.on(event, fns)
  );
};
