import axios from "axios"
import React, {  useEffect, useState } from "react";
function Hooks() {
    const [usersData, setUsersData] = useState({
        users:[], loading:true, errors:null
    })

    const fetchedData=async()=> {
        let data
        
        
        

        try {        
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
        setUsersData((prevState)=> ({...prevState, users:data , loading:false}))
    }
    catch (e) {
       setUsersData((prevState)=> ({...prevState, errors:e, loading:false}))
    }
                
     }
        
     

useEffect(()=> {
            fetchedData()
}, [])

    return (
        <>
        <h1>users</h1>
        <div>
            {console.log(usersData.loading)}
            
        {!(usersData.loading) ? (
            usersData.users.map((eachUser) => {
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
          )}
        </div>
        </>
    )
}
export default Hooks