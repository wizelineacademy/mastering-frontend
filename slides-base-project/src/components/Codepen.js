import React from "react";

// this needs to be improved, it might only work in certain screen sizes
const codepenStyle = {
  position: "absolute",
  width: "1280px",
  height: "708px",
  marginTop: "-350px",
  marginLeft: "-639px"
};

export default class Counter extends React.Component {
  render() {
    const { url } = this.props;
    return <iframe src={url} style={codepenStyle} />;
  }
}
