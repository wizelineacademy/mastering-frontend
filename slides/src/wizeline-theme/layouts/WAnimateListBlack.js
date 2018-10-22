import React from "react";
import styled from "styled-components";
import { Appear } from 'mdx-deck'
import SlideImage from "./images/7_textless-black.svg";

const MainContainer = styled.div([], {
  color: "white",
  position: "relative",
  width: "1280px",
  minHeight: "720px",
  padding: "20px 100px 40px"
});

const ImageContainer = styled.div([], {
  position: "absolute",
  width: "1280px",
  height: "768px",
  zIndex: 1,
  top: 0,
  left: 0
});

const ContentContainer = styled.div`
  position: relative;
  z-index: 2;

  * {
    margin: 0;
  }
  h2 {
    margin-bottom: 1em;
    text-align: left;
  }
  h4 {
    font-style: italic;
  }
  h4, ul, ol, li, p {
    font-weight: normal;
    text-align: left;
  }
  h2 + div {
    height 200px !important;
  }
  > div > div {
    margin-left: -100px;
    margin-top: 10px;
    position: absolute;
  }
`;

const listTags = ['ul', 'ol'];

const animateList = ({ props : { children, name: ListType }}, listIndex) => (
  <ListType key={listIndex}>
    <Appear>
      {React.Children.map(children, (listItem, index) => <li key={`${listIndex}-${index}`}>{listItem.props.children}</li>)}
    </Appear>
  </ListType>
);

const WAnimateListBlack = ({ children }) => (
  <MainContainer>
    <ImageContainer>
      <SlideImage/>
    </ImageContainer>
    <ContentContainer>
      {React.Children.map(children.props.children, (child, index) => listTags.includes(child.props.name) ? animateList(child, index) : child)}
    </ContentContainer>
  </MainContainer>
);

export default WAnimateListBlack;
