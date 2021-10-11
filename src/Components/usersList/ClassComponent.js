import React, { Component } from "react";
import axios from "axios";

class UsingAsync extends Component {

    constructor(props) {
        super(props)
        this.state={users:[], loading:true,errors:null}
    }

     fetchedData=async()=> {
      const response=await axios.get("https://jsonplaceholder.typicode.c/users")
     
      .then((response)=> {
        console.log(response)

      })
      .catch ((e)=> {
        console.log(e)
      })
    }

  fetchedData2=async()=> {
    let response
      try {
        response=await axios.get("https://jsonplaceholder.typicode.c/users")
      }
      catch (error) {
          console.log(error)
      }
}

 fetchedData3=async()=> {
   let response
       if (response.status===200) {
         response=await axios.get("https://jsonplaceholder.typicode.c/users")
         const fetchedUser=response
         const updatedUser=fetchedUser.data.map(user=>({
                     id:`${user.id}`,
                     name:`${user.name}`,
                     phone:`${user.phone}`,
                     username:`${user.username}`,
                     website:`${user.website}`,
                     address:`${user.address.city}`,
                     street:`${user.address.street}`,
                     email:`${user.email}`,
                     company:`${user.company.name}`,
         }))
         this.setState({users:updatedUser, loading:false})
       }
       else {
         console.log("error")
        
           this.setState({ loading: false})
       }
     }
     
    componentDidMount () {
       this.fetchedData()
       this.fetchedData2()
          
    }

    render () {
        const {users,loading}=this.state;
        return (
            <>
            <h1>class</h1>
            <h1>users</h1>
            <hr/>
            <div>
            {!loading ? (
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
          )}
            </div>
            </>
        )
    }

}
export default UsingAsync