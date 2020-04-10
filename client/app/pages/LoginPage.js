import React from 'react';
import TitleText from '../components/TitleText';
import LoginTextField from '../components/loginTextField';
import FilledButton from '../components/filledButton';

export default class LoginPage extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return <div>
            <TitleText text="Sign In"/>
            <LoginTextField title="Username / Email Address" placeholder="Username / Email Address"/>
            <LoginTextField title="Password" placeholder="Password"/>
            <FilledButton text="Sign In!"/>
        </div>
    }

}