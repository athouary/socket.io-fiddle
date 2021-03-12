'use strict';

(function() {

  const socket = io();

  socket.on('connect', () => {
    console.log(`connect ${socket.id}`);
  });

  socket.on('disconnect', () => {
    console.log(`disconnect ${socket.id}`);
  });

  window.addEventListener('beforeunload', event => {
    console.log('preventing the window from closing')
    event.preventDefault();
    event.returnValue = 'unused string';
    setTimeout(() => {
      console.log('emitting hello on socket');
      socket.emit('hello', (serverAnswer) => {
        console.log('server answer:', serverAnswer);
      });
    }, 1000)
  });
})();
