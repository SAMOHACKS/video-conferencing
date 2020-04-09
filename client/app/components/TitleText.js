import React from "react";

export default class TitleText extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let text = this.props.text;
    return <h1>{text}</h1>;
  }
}
