Eve.prototype.last = function (event, ...data) {
  const fns = this.eventMap.get(event);
  if (!fns || fns.size === 0) return;

  let lastFn = null;
  for (const fn of fns) {
    lastFn = fn;
  }
  lastFn(...data);
};
