import React from "react";
import styled from "styled-components";
import SlideImage from "./images/7_textless-black.svg";

const MainContainer = styled.div([], {
  color: "white",
  position: "relative",
  width: "1280px",
  minHeight: "720px",
  padding: "20px 100px 40px"
});

const ImageContainer = styled.div`
  position: absolute;
  width: 1280px;
  height: 768px;
  z-index: 1;
  top: 0;
  left: 0;
  .background {
    fill: red;
  }
`;

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
  h4 {
    font-style: italic;
  }
  h4, p {
    font-weight: normal;
  }
  ul {
    font-size: 32px;
  }
`;

const WStaticRed = ({ children }) => (
  <MainContainer>
    <ImageContainer>
      <SlideImage/>
    </ImageContainer>
    <ContentContainer>
      {children}
    </ContentContainer>
  </MainContainer>
);

export default WStaticRed;
