import React from "react";
import styled from "styled-components";

const RouteNotFount = styled.div`
  width: 80%;
  margin: 0 auto;
  position: relative;
  > img {
    position: center;
    margin-top: 80px;
  }
`;

export default function NotFound() {
  return (
    <RouteNotFount>
      <img
        alt="Not Found Page"
        src="https://speckyboy.com/wp-content/uploads/2010/03/four-oh-four_22.jpg"
      />
    </RouteNotFount>
  );
}
