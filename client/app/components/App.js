import React from 'react';
let P2P = require('socket.io-p2p');
let io = require('socket.io-client');

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let socket = io();
        let p2p = new P2P(socket);
        p2p.on('peer-msg', function (data) {
            console.log('From a peer %s', data);
        });
    }
    render() {
        return <h1>Hello world</h1>
    }
}
export default App; 
