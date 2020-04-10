import React from 'react';
import TitleText from '../components/TitleText';
import LoginTextField from '../components/loginTextField';

export default class CreateAccount extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return <div>
            <TitleText text="New to ClassZoom? Create an Account!"/>
            <LoginTextField title="Email Address"/>
            <LoginTextField title="Username"/>
            <LoginTextField title="Password"/>
            <LoginTextField title="Confirm password"/>

        </div>
    }
}