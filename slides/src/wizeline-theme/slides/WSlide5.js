import React from "react";
import styled from "styled-components";
import SlideImage from "./images/6_textless.svg";

const MainContainer = styled.div([], {
  position: "relative",
  width: "1280px"
});

const Title = styled.h1([], {
  position: "absolute",
  color: "white",
  fontSize: "53px",
  textAlign: "center",
  right: "54px",
  top: "197px"
});
const Title2 = styled.h1([], {
  position: "absolute",
  color: "white",
  fontSize: "53px",
  textAlign: "center",
  right: "54px",
  top: "261px"
});

const Content1 = styled.p([], {
  position: "absolute",
  color: "white",
  fontSize: "27px",
  textAlign: "center",
  right: "54px",
  top: "395px"
});
const Content2 = styled.p([], {
  position: "absolute",
  color: "white",
  fontSize: "27px",
  textAlign: "center",
  right: "54px",
  top: "425px"
});

export default class WSlide5 extends React.Component {
  render() {
    const { title, title2, content1, content2 } = this.props;

    return (
      <MainContainer>
        <Title>{title}</Title>
        <Title2>{title2}</Title2>
        <Content1>{content1}</Content1>
        <Content2>{content2}</Content2>
        <SlideImage />
      </MainContainer>
    );
  }
}
