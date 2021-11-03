import React, {  useEffect, useState } from "react";
import axios from "axios";

function HooksAxios() {
    // const [users, setUsers] = useState([]);
    // const [loading, setLoading]=useState(true);
    // const [error, setError]=useState(null)

    const [userData, setUserData]=useState({
        users:[],loading:true, errors:null
    })



    const fetchedData=async()=> {
        let data
        const response= await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(response)
                
        data=response.data.map((user)=> {
        return {
            id:`${user.id}`,
            name:`${user.name}`,
            phone:`${user.phone}`,
            username:`${user.username}`,
            website:`${user.website}`,
            address:`${user.address.city}`,
            street:`${user.address.street}`,
            email:`${user.email}`,
            company:`${user.company.name}`,
            }
        })
                
        setUserData((prevState)=> ({...prevState, users:data }))
     }
    

    useEffect(() => {
        fetchedData()
       
      }, []);
    
    

    return (
        <>
        <h1>hooks</h1>
        <h1>users</h1>
        <hr/>
        <div>
        {/* {!loading ? (
            users.map((eachUser) => {
              const { id,username, name,phone,website,address,street,email,company } = eachUser;
              return (
                <div key={id}>
                  <p>name: {name}</p>
                  <p>username: {username}</p>
                  <p>phone: {phone}</p>
                  <p>website: {website}</p>
                  <p>address: {address}</p>
                  <p>street: {street}</p>
                  <p>email: {email}</p>
                  <p>company: {company}</p>
                  <hr/>
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )} */}
        </div>
        
        </>
    )

}
export default HooksAxios