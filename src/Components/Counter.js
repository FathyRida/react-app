import React from "react";
import styled from "styled-components";

const AppCaontainer = styled.div`
  background: #eeeeee;
  width: 50%;
  margin: 0 auto;
  padding: 20px;
`;
class Counter extends React.Component {
  render() {
    const { value } = this.props;
    return (
      <AppCaontainer>
        <h3>{value}</h3>
      </AppCaontainer>
    );
  }
}

export default Counter;
