import React from 'react';
import Video from './Video';
let P2P = require('socket.io-p2p');
let io = require('socket.io-client');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stream: this.openMediaDevices()
        }
    }
    componentDidMount() {
        let socket = io();
        let options = {numClients: 10};
        let p2pSocket = new P2P(socket, options);
        p2pSocket.on('peer-msg', data => {
            console.log('From a peer %s', data);
        });
    }
    async openMediaDevices() {
        let stream = null;
        const constraints = {
            video: 'true',
            audio: 'true'
        }
        try {
            stream = await navigator.mediaDevices.getUserMedia(constraints);
        }
        catch(e) {
            console.log(e.message);
        }
    }
    render() {
        return <Video stream={this.state.stream} /> 
    }
}
export default App; 
