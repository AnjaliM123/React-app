import React, {  useEffect, useState } from "react";
import axios from "axios";

function Hooks() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading]=useState(true);
    const [error, setError]=useState(null);


    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=5")
        .then((response)=> {
            console.log(response);
            setUsers(response.data.results.map((user)=> {
                return {
                    name: `${user.name.first} ${user.name.last}`,
                  username: `${user.login.username}`,
                  email: `${user.email}`,
                  image: `${user.picture.thumbnail}`,
                }
            }));
            setIsLoading(false)
        })
       .catch((error)=> {
         console.log(error)
           setError(error)
           setIsLoading(false)
       })
      }, [])


    return (
        <>
        <h1>hooks</h1>
        <h1>users</h1>
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
    )
}
export default Hooks