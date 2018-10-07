import React from "react";
import styled from "styled-components";
import SlideImage from "./images/9_textless.svg";

const MainContainer = styled.div([], {
  position: "relative",
  width: "1280px",
  minHeight: "720px"
});

const ImageContainer = styled.div([], {
  position: "absolute",
  width: "1280px",
  height: "768px",
  zIndex: 1,
  top: 0,
  left: 0
});

const WLayout2 = ({ children }) => {
  return (
    <MainContainer>
      <ImageContainer>
        <SlideImage />
      </ImageContainer>
      <div
        style={{
          position: "relative",
          zIndex: 2,
          verticalAlign: "middle",
          marginTop: "334px",
          transform: "translateY(-50%)"
        }}
      >
        {children}
      </div>
    </MainContainer>
  );
};

export default WLayout2;
