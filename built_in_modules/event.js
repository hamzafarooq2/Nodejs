//on- listen for an event
// emit- emit an event

const EventEmitter = require('events');

const customEmitter = new EventEmitter();   // instance of our class

customEmitter.on('response', () => {
    console.log(`data recieved`)
});

customEmitter.emit('response'); 