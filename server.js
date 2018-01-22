const express = require('express');
const http = require('http');
const url = require('url');
const WebSocket = require('ws');

const app = express();

// app.use(function (req, res) {
//     res.send({ msg: "hello" });
// });
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
// app.get("/", (req, res) => {
//     res.send("Hello websocket");
// });

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws, req) {
    console.log('a user connected');
    const location = url.parse(req.url, true);
    // You might use location.query.access_token to authenticate or share sessions
    // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)

    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        ws.send('received');
    });

    ws.on('close', function close(message) {
        console.log('closed');
    });
});

server.listen(8080, function listening() {
    console.log('Listening on %d', server.address().port);
});