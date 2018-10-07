import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Description = styled.p([], {
  color: "purple"
});

export default class Counter extends React.Component {
  state = { counter: 0 };
  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        <Title>Counter</Title>
        <Description>Styled components work!</Description>
        <button onClick={this.handleClick}>Click me</button>
        <p>you have clicked the button {this.state.counter} times</p>
      </div>
    );
  }
}
