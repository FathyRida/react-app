import React, { Component } from "react";
import Navbar from "./Components/common/Navbar";
import styled from "styled-components";
import Products from "./Components/Rcomponents/Products";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Components/Rcomponents/Home";
import NotFound from "./Components/common/NotFound";
const BlogContent = styled.div``;
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <BlogContent>
          <Switch>
            <Route
              path="/products/:id?"
              render={props => <Products {...props} />}
            />
            <Redirect from="/inbox" to="/products" />
            <Route path="/not-found" component={NotFound} />
            <Route
              exact
              path="/"
              render={props => (
                <Home
                  {...props}
                  appname="Title to test passing data betweeen two components using Route component of react-router-dom package"
                />
              )}
            />

            <Redirect to="/not-found" />
          </Switch>
        </BlogContent>
      </div>
    );
  }
}

export default App;
