import React, { Component } from "react";
import axios from "axios";
class Users extends Component {
  state = {
    users: [],
    isLoading: true,
    errors: null,
  };

  //axios.http method (apiurl) .then((response)=>{}).catch((error)=>{})
  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=5")
      .then((response) => {
        this.setState({
          users: response.data.results.map((user) => {
            return {
              name: `${user.name.first} ${user.name.last}`,
              username: `${user.login.username}`,
              email: `${user.email}`,
              image: `${user.picture.thumbnail}`,
            };
          }),
          isLoading: false,
        });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }
  render() {
    const { isLoading, users } = this.state;
    return (
      <div className="container">
        <h2>Random User</h2>
        <div>
          {!isLoading ? (
            users.map((user) => {
              const { username, name, email, image } = user;
              return (
                <div key={username}>
                  <p>{name}</p>
                  <div>
                    <img src={image} alt={name} />
                  </div>
                  <p>{email}</p>
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    );
  }
}
export default Users;