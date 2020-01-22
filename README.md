# Eve, the tiny event emitter.

I stumbled upon [eev](https://github.com/chrisdavies/eev) which claims to be tiny and fast.

It is tiny and fast but not quite as tiny as it could be so I made something even more tiny.

core.eve.js is all the fundemental API an event emitter needs and even faster.

## How to get it.
It is so simple and tiny the easiest way would be to just copy and paste the source and eventually modify it to your need.

Another possibility is to use jsDelivr: https://cdn.jsdelivr.net/gh/SilvanCodes/eve/core.eve.min.js

For the patches:
- https://cdn.jsdelivr.net/gh/SilvanCodes/eve/patches/on.patch.eve.min.js
- https://cdn.jsdelivr.net/gh/SilvanCodes/eve/patches/ons.patch.eve.min.js
- https://cdn.jsdelivr.net/gh/SilvanCodes/eve/patches/once.patch.eve.min.js
- https://cdn.jsdelivr.net/gh/SilvanCodes/eve/patches/last.patch.eve.min.js

Having the following setup pulls in core and applies the patches:

```html
<html>
    <head>
        <script src="https://cdn.jsdelivr.net/gh/SilvanCodes/eve/core.eve.min.js"></script>
        <script src="https://cdn.jsdelivr.net/gh/SilvanCodes/eve/patches/on.patch.eve.min.js"></script>
        <script src="https://cdn.jsdelivr.net/gh/SilvanCodes/eve/patches/ons.patch.eve.min.js"></script>
        <script src="https://cdn.jsdelivr.net/gh/SilvanCodes/eve/patches/once.patch.eve.min.js"></script>
        <script src="https://cdn.jsdelivr.net/gh/SilvanCodes/eve/patches/last.patch.eve.min.js"></script>
    </head>
</html>
```

## How to use it.

Create an event emitter.

```js
const eve = new Eve();
```

Setup and register event handlers.

```js
const logData = data => console.log('Got some data:', data);
const logAdded = (a, b) => console.log(a + b);

eve.on('my-event-name', logData);
eve.on('add-and-log', logAdded);
```

Then go and fire your events.

```js
eve.emit('my-event-name', 'test'); // output: Got some data: test

// multiple arguments are possible after event name
eve.emit('add-and-log', 5, 6); // output: 11
```

Finally when you are done unregister the handlers.

```js
// unregister a single handler
eve.off('my-event-name', logData);

// unregister all handlers at once by just providing the event name
eve.off('log-and-add');
```

## Patches.
> ons.patch.eve.js needs on.patch.eve.js to be applied first.

There is a patches folder which offers some extensions to the essential API.

They really are convenience functions so I did not include them in the core.

Apply the patches as you see fit.

### on.patch.eve.js

This patch allows for the following syntax:

```js
const handler1 = data => console.log(data);
const handler2 = data => console.log(data);
const handler3 = data => console.log(data);

// register multiple handlers at once
eve.on('my-event-name', handler1, handler2, handler3);
```

### ons.patch.eve.js

This patch allows for the following syntax:

```js
const handler1 = data => console.log(data);
const handler2 = data => console.log(data);
const handler3 = data => console.log(data);

// supply handlers as an object
eve.ons({
    // key is event, value is handler
    'my-event-name': handler1,
    // array of handlers is fine too
    'my-other-event': [handler2, handler3]
});
```

### once.patch.eve.js

This patch allows for the following syntax:

```js
const handler1 = data => console.log(data);

// this handler will only fire once and then unregister itself
eve.once('my-event-name', handler1);
```

### last.patch.eve.js

This patch allows to only invoke the most recent registered handler:

```js
const handler1 = data => console.log('handler1', data);
const handler2 = data => console.log('handler2', data);

eve.on('my-event-name', handler1);
eve.on('my-event-name', handler2);

// this will only trigger handler2
eve.last('my-event-name', 'data'); // output: 'handler2 data'
```
