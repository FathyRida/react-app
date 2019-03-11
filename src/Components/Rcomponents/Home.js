import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const HomePage = styled.div`
  width: 80%;
  margin: 10px auto;
`;

const Home = props => {
  console.log(props);

  return (
    <HomePage>
      <h3>Home Component</h3>
      <p>{props.appname}</p>
    </HomePage>
  );
};

export default withRouter(Home);
