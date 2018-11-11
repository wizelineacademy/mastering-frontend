import React from "react";
import styled from "styled-components";

// this needs to be improved, it might only work in certain screen sizes
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: ${240 * 3}px
`;

const StyledImage = styled.img`
  display: block;
  margin: 20px;
  max-width: 200px;
  height: auto;
`;

export default class ImageGrid extends React.Component {
  render() {
    const { images } = this.props;

    return (
      <Container>
        {images.map(this.renderImage)}
      </Container>
    );
  }

  renderImage = (src) => <StyledImage src={src} />;
}
