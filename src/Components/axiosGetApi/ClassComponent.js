
import React, { Component } from "react";
import axios from "axios";
class Axios extends Component {
    constructor (props) {
        super(props)
        this.state={users:[], isLoading:true, errors:null}
    }

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
          <>
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
          </>
        );
      }
    }
    export default Axios

