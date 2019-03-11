import React from "react";
import queryString from "query-string";

export default class Products extends React.Component {
  onClikcBackHandler = () => {
    this.props.history.replace("/");
  };

  render() {
    const id = this.props.match.params.id;
    const params = queryString.parse(this.props.location.search);
    console.log(params);
    let productsDetails = null;
    if (id) {
      productsDetails = <h4> Details loaded for Product Number : {id}</h4>;
    }

    return (
      <div>
        <h3>Product Component loaded successfuly ...</h3>
        {productsDetails}

        <button
          className="btn btn-info btn-sm"
          onClick={this.onClikcBackHandler}
        >
          Back
        </button>
      </div>
    );
  }
}
