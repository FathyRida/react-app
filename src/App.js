import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import Pagination from "./Components/Pagination";
import Table from "./Components/Table";
import Axios from "axios";

const NavApp = styled.div`
  position: relative;
  top: 50px;
  left: 50px;
`;
const TabController = styled.div`
  position: absolute;
  top: 10px;
  width: 500px;
  margin: 0 auto;
`;

class App extends Component {
  state = {
    users: [],
    selected: [true, false],
    nbrOfusers: 7,
    currentPage: 1
  };

  oldRequest() {
    Axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      let trasUsers = response.data.map(user => {
        let randomisSelected = Math.floor(
          Math.random() * this.state.selected.length
        );
        return { ...user, liked: this.state.selected[randomisSelected] };
      });
      // console.log(trasUsers);
      this.setState({
        users: trasUsers
      });
    });
  }

  sendRequest = () => {
    let nbrOfusers = 5;
    if (this.state.nbrOfusers !== nbrOfusers) {
      nbrOfusers = this.state.nbrOfusers;
    }
    Axios.get("https://randomuser.me/api/?results=" + nbrOfusers + "").then(
      response => {
        //console.log(response.data.results);
        const newusers = response.data.results.map((user, index) => {
          let randomisSelected = Math.floor(
            Math.random() * this.state.selected.length
          );
          const { name, picture, location, nat } = user;
          return {
            id: index,
            fullname: name.first + " " + name.last,
            location,
            picture,
            nat,
            liked: this.state.selected[randomisSelected]
          };
        });
        // console.log(newusers);
        this.setState({
          users: newusers
        });
      }
    );
  };

  onDeleteUserHandler = userId => {
    console.log("onDeleteUserHandler", userId);
    let newusers = [...this.state.users];
    const data = newusers.filter(user => user.id !== userId);
    this.setState({
      users: data
    });
  };

  componentDidMount = () => {
    this.sendRequest();
  };

  onPageChaneHanlder = currentPage => {
    console.log(currentPage);
  };

  render() {
    return (
      <React.Fragment>
        <TabController>
          <button className="btn btn-warning btn-sm" onClick={this.sendRequest}>
            Reload Users
          </button>
        </TabController>
        <NavApp>
          <Table
            appusers={this.state.users}
            onDelete={this.onDeleteUserHandler}
          />
          <Pagination
            currentPage={this.state.currentPage}
            itmes={this.state.users.length}
            pageSize={4}
            onPageChane={this.onPageChaneHanlder}
          />
        </NavApp>
      </React.Fragment>
    );
  }
}

export default App;
