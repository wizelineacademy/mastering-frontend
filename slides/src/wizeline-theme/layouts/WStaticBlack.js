import React from "react";
import styled from "styled-components";
import SlideImage from "./images/9_textless-black.svg";

const MainContainer = styled.div([], {
  color: "white",
  position: "relative",
  width: "1280px",
  minHeight: "720px",
  padding: "10px 100px 40px"
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
    text-align: left;
  }
  h2 { 
    margin-bottom: 1em;
  }
  p {
    font-weight: normal;
  }
  img {
    width: auto;
    height: 550px;    
  }
  blockquote {
    font-size: 0.8em;
  }
  > div > div {
    margin-left: -100px;
    margin-top: 300px;
    position: absolute;
    transform: translateY(-50%);
    p {
      position: absolute;
      top: 80px;
    }
  }
`;

const WStaticBlack = ({ children }) => (
  <MainContainer>
    <ImageContainer>
      <SlideImage/>
    </ImageContainer>
    <ContentContainer>
      {children}
    </ContentContainer>
  </MainContainer>
);

export default WStaticBlack;
