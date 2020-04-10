import React, { useEffect, useState, useRef } from 'react';
import Video from './Video';
import P2P from 'socket.io-p2p';
import io from 'socket.io-client';

function App() {
    const [yourID, setYourID] = useState("");
    const [stream, setStream] = useState();
    const [users, setUsers] = useState({});

    const userVideo = useRef();
    const socket = useRef();

    useEffect(() => {
        let mounted = true;
        socket.current = io("localhost:3000");
        let constraints = { video: true, audio: true }

        navigator.mediaDevices.getUserMedia(constraints)
            .then(stream => {
                setStream(stream);
                if(userVideo.current) {
                    userVideo.current.srcObject = stream;
                }
                let data = {id: socket.current.id, stream};
                socket.current.emit('user-joined', data);
                console.log("here ya go: ")
                console.log(data.stream);
            })
            .catch(e => console.log(e.message));
        
        // socket.on('user-joined', data => {
        //     setUsers([...users, data]);
        //     console.log(users);
        // });
        socket.current.on('user-list', users => {
            setUsers(users);
            console.log(users);
        })
        return () => mounted = false;
    },[])

    let userVideoComponent;
    if (stream) {
       userVideoComponent = <video autoPlay muted playsInline ref={userVideo} />; 
    }

    return (
        <div>
            {userVideoComponent}
            {/* {
                users.map(u => {
                    let ref = useRef();
                    ref.current.srcObject = u.stream;
                    return <video autoPlay muted playsInline ref={ref} />
                })
            } */}
            {/* {
                Object.keys(users).map(key => {
                    // console.log(users[key].stream);
                    return <video autoPlay muted playsInline src={URL.createObjectURL(users[key].stream)} />
                })
            } */}
        </div>
    );
}
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         }
//     }
//     componentDidMount() {
//         let socket = io("localhost:3000");
//         let options = {numClients: 10};
//         let p2pSocket = new P2P(socket, options);
//         p2pSocket.on('peer-msg', data => {
//             console.log('From a peer %s', data);
//         });
//     }
    
//     render() {
//         let video = <video autoPlay muted playsInline ></video>;
//         function openMediaDevices(video) {
//             let stream = null;
//             const constraints = {
//                 video: 'true',
//                 audio: 'true'
//             }
//             navigator.mediaDevices.getUserMedia(constraints)
//                 .then(s => video.srcObject = stream)
//                 .catch(e => console.log(e.message));
//         }
//         openMediaDevices(video);
//         return video;
//     }
// }
export default App; 
