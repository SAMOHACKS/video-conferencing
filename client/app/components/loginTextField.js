import React from 'react';

export default class LoginTextField extends React.Component {
    constructor(props){
        super(props)
        //TAKES title and placeholder
    }

    render(){
        return <div>
            <h4>{this.props.title}</h4>
            <input placeholder={this.props.placeholder}></input>
        </div>
    }
}