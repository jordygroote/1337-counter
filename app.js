var app = require('express')();
var server = require('http').Server(app);

var io = require('socket.io')(server);
server.listen(3000);

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});


var time;

setInterval(function() {

    timeclock = new Date();
    time = timeclock.getHours() + ':' + timeclock.getMinutes();

    io.sockets.emit('timer', {
        time : time
    });

}, 2500);

io.sockets.on('connection', function (socket) {

    console.log('Made a connection');

});