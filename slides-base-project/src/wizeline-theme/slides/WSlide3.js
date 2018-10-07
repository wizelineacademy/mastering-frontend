import React from "react";
import styled from "styled-components";
import SlideImage from "./images/4_textless.svg";

const MainContainer = styled.div([], {
  position: "relative",
  width: "1280px"
});

const Title = styled.h1([], {
  position: "absolute",
  color: "white",
  fontSize: "64px",
  textAlign: "center",
  width: "100%",
  top: "264px"
});

export default class WSlide3 extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <MainContainer>
        <Title>{title}</Title>
        <SlideImage />
      </MainContainer>
    );
  }
}
