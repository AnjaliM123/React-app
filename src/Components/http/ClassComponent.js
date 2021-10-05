import React, { Component } from "react";
import axios from "axios";

class UsingAxios extends Component {

    constructor(props) {
        super(props)
        this.state={users:[], loading:true,errors:null}

    }
    
     fetchedData=async()=> {
      let response=await axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response)=>{
       
          console.log(response)

          this.setState({
              users:response.data.map((user)=> {
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
              }),
              loading:false
          })


      })
      .catch((error) => this.setState({ error, loading: false }));
     }
     
    componentDidMount () {
       this.fetchedData()
          
    }

    render () {
        const {users,loading}=this.state;
        console.log("users", users)
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
export default UsingAxios