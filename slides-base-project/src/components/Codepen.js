import React from "react";
import styled from "styled-components";
import Logo from "./CodepenLogo.svg";

// this needs to be improved, it might only work in certain screen sizes
const codepenStyle = {
  position: "absolute",
  width: "1280px",
  height: "708px",
  marginTop: "-350px",
  marginLeft: "-639px"
};

const logoStyle = {
  width: "200px",
  display: "block"
};

const LoadButton = styled.button([], {
  backgroundColor: "purple",
  color: "white",
  fontSize: "30px"
});

export default class Counter extends React.Component {
  state = { loadDemo: false };
  handleClick = () => {
    this.setState({ loadDemo: true });
  };
  render() {
    const { url } = this.props;
    if (!this.state.loadDemo) {
      return (
        <LoadButton onClick={this.handleClick}>
          Load <Logo style={logoStyle} /> Demo
        </LoadButton>
      );
    }
    return <iframe src={url} style={codepenStyle} />;
  }
}
