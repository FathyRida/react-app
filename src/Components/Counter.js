import React from "react";
import styled from "styled-components";

const AppCaontainer = styled.div`
  background: #eeeeee;
  width: 50%;
  margin: 0 auto;
  padding: 20px;
`;
const AppButton = styled.button`
  padding: 10px;
  color: white;
  border: none;
  background-color: #0d6fc394;
  width: 100px;
  display: inline-block;
  margin: 2px;
`;

const Counter = ({ value, clicked, deleted }) => {
  return (
    <AppCaontainer>
      <p>{value}</p>
      <AppButton onClick={clicked}>+</AppButton>
      <AppButton onClick={deleted}>-</AppButton>
    </AppCaontainer>
  );
};

export default Counter;
