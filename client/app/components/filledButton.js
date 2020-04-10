import React from 'react';

export default class FilledButton extends React.Component {
    constructor(props){
        super(props);
        //Takes in text and onClick
    }

    render(){
        return <button onClick={this.props.onClick}>
            {this.props.text}
        </button>
    }


}