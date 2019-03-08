import React, { Component } from "react";
import styled from "styled-components";
import Like from "./Like";

const Image = styled.img`
  border-radius: 50px;
`;

export default class Table extends Component {
  state = {};

  render() {
    const { appusers, onDelete } = this.props;

    const app_users = appusers.map(user => {
      return (
        <tr key={user.id}>
          <td>
            <Image src={user.picture.medium} alt={user.fullname} />
          </td>
          <td>{user.fullname}</td>
          <td>
            {user.location.street}{" "}
            <span>
              <b>{user.location.city}</b>
            </span>
          </td>
          <td>{user.nat}</td>
          <td>
            <Like liked={user.liked} />
          </td>
          <th scope="col">
            <button
              className="btn btn-danger btn-sm"
              onClick={() => onDelete(user.id)}
            >
              Delete
            </button>
          </th>
        </tr>
      );
    });
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Profile</th>
            <th scope="col">Name</th>
            <th scope="col">Adresse</th>
            <th scope="col">Nationality</th>
            <th scope="col">Status</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>{app_users}</tbody>
      </table>
    );
  }
}
