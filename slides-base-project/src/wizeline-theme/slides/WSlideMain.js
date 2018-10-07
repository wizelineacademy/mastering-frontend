import React from "react";
import styled from "styled-components";
import SlideImage from "./images/1_textless.svg";

const MainContainer = styled.div([], {
  position: "relative",
  width: "1280px"
});

const Title = styled.h1([], {
  position: "absolute",
  color: "white",
  textAlign: "right",
  right: "83px",
  top: "116px"
});

const Subtitle = styled.h1([], {
  position: "absolute",
  color: "white",
  fontSize: "43px",
  textAlign: "right",
  right: "83px",
  top: "81px"
});

export default class WSlideMain extends React.Component {
  render() {
    const { title, subtitle } = this.props;

    return (
      <MainContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <SlideImage />
      </MainContainer>
    );
  }
}
