import React from "react";
import styled from "styled-components";

const LikeConatainer = styled.i`
  cursor: pointer;
`;
class Like extends React.Component {
  state = {
    liked: null
  };
  componentDidMount() {
    this.setState({
      liked: this.props.liked
    });
  }

  onClickLikeHandler = () => {
    //console.log(this.state.liked);
    this.setState({
      liked: !this.state.liked
    });
  };

  render() {
    let classes = "fa fa-heart";
    if (this.state.liked) {
      classes += "-o";
    }
    // console.log(this.props.liked, "LikeConatainer");
    return (
      <LikeConatainer className={classes} onClick={this.onClickLikeHandler} />
    );
  }
}

export default Like;
