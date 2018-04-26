var socket = io();

socket.on('connect', function (){
    console.log('connected to server');

    socket.emit('createEmail', {
        to:'jsen.gritny@outlook.com',
        text: 'hey Brenno'
    });

    socket.emit('createMessage', {
        from: 'breeno.tondato@gmail.com',
        text: 'O que ela fez ?'
    })
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newEmail', function (data) {
    console.log(data)
});

socket.on('newMessage', function (data) {
    console.log(data)
});
