import React from 'react';
import TitleText from '../components/TitleText';
import FilledButton from '../components/filledButton';

export default class IntroPage extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return <div>
            <TitleText text="Welcome to ClassZoom!"/>
            <FilledButton text="Sign in" onClick={()=>{console.log("SMH")}}/>
            <FilledButton text="Create Account" onClick={()=>{console.log("SMH")}}/>
            <FilledButton text="Sign in" onClick={()=>{console.log("SMH")}}/>

        </div>
    }
}