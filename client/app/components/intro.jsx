import React from 'react';
import TitleText from './TitleText';

export default class IntroPage extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return <div><TitleText text="Welcome to ClassZoom!"/><h1>SMH</h1></div>
    }
}