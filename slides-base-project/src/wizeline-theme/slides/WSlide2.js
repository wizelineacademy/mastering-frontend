import React from "react";
import styled from "styled-components";
import SlideImage from "./images/3_textless.svg";

const MainContainer = styled.div([], {
  position: "relative",
  width: "1280px"
});

const Title = styled.h1([], {
  position: "absolute",
  color: "white",
  textTransform: "uppercase",
  fontSize: "54px",
  textAlign: "left",
  left: "253px",
  top: "72px"
});

const Subtitle = styled.h1([], {
  position: "absolute",
  color: "white",
  textTransform: "uppercase",
  fontSize: "54px",
  textAlign: "left",
  left: "253px",
  top: "138px"
});

const ContentList = styled.ul([], {
  position: "absolute",
  listStyleType: "none",
  textAlign: "left",
  left: "730px",
  top: "355px",
  color: "black",
  fontSize: "24px"
});

const ListItem = styled.li([], {
  marginBottom: "30px"
});

export default class WSlide2 extends React.Component {
  render() {
    const {
      title,
      title2,
      content1,
      content2,
      content3,
      content4
    } = this.props;

    return (
      <MainContainer>
        <Title>{title}</Title>
        <Subtitle>{title2}</Subtitle>
        <ContentList>
          <ListItem>{content1}</ListItem>
          <ListItem>{content2}</ListItem>
          <ListItem>{content3}</ListItem>
          <ListItem>{content4}</ListItem>
        </ContentList>
        <SlideImage />
      </MainContainer>
    );
  }
}
