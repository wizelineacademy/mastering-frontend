import React from "react";
import styled from "styled-components";
import SlideImage from "./images/3_textless.svg";

const MainContainer = styled.div`
  color: white;
  position: relative;
  width: 1280px;
  
  .fifth {
    stroke: ${props => props.length > 4 ? '#90adb6': 'none' };
    fill: ${props => props.length > 4 ? '#90adb6': 'none' };
  }
`;

const Title = styled.h1([], {
  position: "absolute",
  textTransform: "uppercase",
  fontSize: "54px",
  textAlign: "left",
  left: "253px",
  top: "72px"
});

const Subtitle = styled.h1([], {
  position: "absolute",
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

const WAgenda = ({ title, subtitle, content = [] }) => (
  <MainContainer length={content.length}>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
    <ContentList>
      {content.map((section, index) => <ListItem key={index}>{section}</ListItem>)}
    </ContentList>
    <SlideImage/>
  </MainContainer>
);

export default WAgenda;
