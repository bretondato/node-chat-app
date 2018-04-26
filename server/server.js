const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) =>{
    console.log('New user conected');

    socket.emit('newEmail', {
        'from': "brenno.tondato@gmail.com",
        "text": "hey there !",
        "created at": new Date().getHours().toString()
    });

    socket.emit('newMessage', {
        from: 'etondato@gmail.com',
        text: 'Brenno a Mikka está aprontando',
        "created at": new Date().getTime().toString()
    });

    socket.on('disconnect', () =>{
       console.log('Disconnected from the user');
    });

    socket.on('createEmail', (data) => {
        console.log(data);
    });

    socket.on('createMessage', (data) =>{
        console.log(data);
    });
});

server.listen(port, () =>{
    console.log(`server running on port ${port}`);
});