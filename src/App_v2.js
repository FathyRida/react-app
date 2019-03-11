import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import Pagination from "./Components/Pagination";
import Table from "./Components/Table";
import { paginate } from "./Helpers/helpers";
import axios from "./Router/axios";
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
    nbrOfusers: 10,
    currentPage: 1,
    pageSize: 4
  };

  oldRequest() {
    // axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
    //   let trasUsers = response.data.map(user => {
    //     let randomisSelected = Math.floor(
    //       Math.random() * this.state.selected.length
    //     );
    //     return { ...user, liked: this.state.selected[randomisSelected] };
    //   });
    //   // console.log(trasUsers);
    //   this.setState({
    //     users: trasUsers
    //   });
    // });
  }

  sendRequest = () => {
    let nbrOfusers = 5;
    if (this.state.nbrOfusers !== nbrOfusers) {
      nbrOfusers = this.state.nbrOfusers;
    }
    axios.get("?results=" + nbrOfusers + "").then(response => {
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
    });
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

  onPageChaneHanlder = cPage => {
    this.setState(
      {
        currentPage: cPage
      },
      () => {
        //console.log(cPage);
      }
    );
  };

  render() {
    // console.log(this.state.users);
    const allusers = paginate(
      this.state.users,
      this.state.currentPage,
      this.state.pageSize
    );
    console.log(allusers);

    return (
      <React.Fragment>
        <TabController>
          <button className="btn btn-warning btn-sm" onClick={this.sendRequest}>
            Reload Users
          </button>
        </TabController>

        <NavApp>
          <Table appusers={allusers} onDelete={this.onDeleteUserHandler} />
          <Pagination
            currentPage={this.state.currentPage}
            itmes={this.state.users.length}
            pageSize={this.state.pageSize}
            onPageChane={this.onPageChaneHanlder}
          />
        </NavApp>
      </React.Fragment>
    );
  }
}

export default App;
