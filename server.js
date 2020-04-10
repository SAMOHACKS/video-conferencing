let express = require('express');
let app = express();
let http = require('http').createServer(app);

let io = require('socket.io')(http);
// let p2p = require('socket.io-p2p-server').Server;
// io.use(p2p);

app.use(express.static(__dirname + '/client/build'))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})

const users = {};

io.on('connection', socket => {
    console.log(`${socket.id} connected`);
    const existingUser = users[socket.id];

    if (!existingUser) {
        users[socket.id]
    }


    socket.on('user-joined', data => {
        socket.broadcast.emit('user-joined', data);
        console.log(data.stream);
        users[data.id] = data.stream;
        io.emit('user-list', users);
        // users[data.id] = stream;
    })

    socket.on('disconnect', () => {
        console.log(`${socket.id} disconnected`);
        delete users[socket.id];
    });
});

http.listen(3000, () => console.log("Listening on *:3000"));