import React from "react";
import styled from "styled-components";
import SlideImage from "./images/thankyou.svg";

const MainContainer = styled.div([], {
  position: "relative",
  width: "1280px"
});

export default class WSlide5 extends React.Component {
  render() {
    return (
      <MainContainer>
        <SlideImage />
      </MainContainer>
    );
  }
}
