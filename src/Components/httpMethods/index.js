import axios from "axios";
import React , {  useEffect, useState } from 'react';
import { Table, Button } from 'reactstrap';
import {AiFillDelete} from "react-icons/ai"

import AddPost from "./AddPost"



function Axios() {
    const [usersData, setUsersData]=useState({
        users:[],errors:null,
    })
    const [modal, setModal]=useState(false)


    console.log(usersData.users)
console.log(usersData)

const toggle = () =>{
 setModal(!modal)
  
} 

const onChangeTitle=(event)=> {setUsersData((prevState)=> ({...prevState, [event.target.name]:event.target.value}))}

console.log(usersData)

const addToggle=()=> {
  setModal(!modal)
}
const onClickSubmit=()=> {
      let addData
      const article={title:`${usersData.title}`, userId:1,   body:`${usersData["body"]}`}
      const headers={'Content-type': 'application/json; charset=UTF-8',}
      axios.post("https://jsonplaceholder.typicode.com/posts", article, {headers})
      .then((response)=> {
       
       addData=(response.data)
        console.log(addData)
            usersData.users.splice(0,0,addData)
            addToggle()
      // setUsersData((prevState)=> ({...prevState, users:addData}))
      })
      .catch((error)=> {
        setUsersData((prevState)=> ({...prevState, errors:error}))
      })
}

    const onClickDelete=(id)=> {
     
       console.log("click", id)

       let data
      let deleted
       const response= axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      // const deleted = usersData.users.filter(row => id !== row.id)
       

       .then ((response)=> {
         console.log("deleted")
      //  const deleted=delete usersData["id"]
        //  const deleted=usersData.users.splice(id,1)
        //  const rows=usersData.users.filter(row=>row.id!==deleted.id)
        const rows=usersData.users.filter(function(row) {
          return row.id!==id
        })
         setUsersData({users:rows})
         //setUsersData({users:usersData.users.splice(id,1)})
         //setUsersData((prevState)=> ({...prevState, users:users.splice(id,1)}))
       })
       .catch((error)=> {
         console.log(error)
       })
        //setUsersData((prevState)=> ({...prevState, users:deleted}))
       // setUsersData({users:deleted})
      //  const rows=usersData.users.filter((row)=>row.id!==id)
      //  setUsersData((prevState)=> ({...prevState, users:rows}))
     
      // setUsersData((prevState)=> ({...prevState, users:data}))
      //  .then((response)=> {
      //     data=splice(id,1)
      //    console.log(response)
      //       data=response.data.map((user)=> {
             
      //         return {
      //               id:`${user.id}`,
      //               title:`${user.title}`,
      //               body:`${user.body}`
      //        }
      //       })
      //       setUsersData((prevState)=> ({...prevState, users:data}))
      //  })
      //  .catch((error)=> {
      //    setUsersData((prevState)=> ({...prevState, errors:error}))
      //  })
        
    }

    // const onClickSubmit=(id)=> {
    //   let data
    //   axios.post("https://jsonplaceholder.typicode.com/posts", {
    //     title:"post request",
    //     body:"post request",
    //     userId:1,
    // })
    // .then((response)=> {
    //    console.log(response)
    // })
    // .catch((error)=> {
    //   console.log(error)
    // })
    // }

    const fetchedData=()=> {
        let data
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=> {
            
            data=response.data.map((user)=> {
                return {
                    id:`${user.id}`,
                    userId:`${user.userId}`,
                    title: `${user.title}`,
                 body: `${user.body}`,
                }
            });
            setUsersData((prevState)=> ({...prevState, users:data}))
        })
       .catch((error)=> {
        setUsersData((prevState)=> ({...prevState, errors:error}))
       })
    }

    useEffect(()=> {
        fetchedData()
    }, [])

    return (
        <>
        <div className="container">
          <div className="row">
            
        <div className="modelcontainer  d-flex flex-row justify-content-startpt-5 pb-5">
        <h1 className="pt-5">Users List</h1>
        <br/>
        
       
       </div>
       <div className="d-flex fle-row justify-content-end">
       <Button className="" color="primary" onClick={toggle} >Add</Button>
       </div>
       <AddPost toggle={toggle} modal={modal} onClickSubmit={onClickSubmit} onChangeTitle={onChangeTitle} />
       <Table >
            <thead>
              <tr >
                {/* <th >id</th> */}
                <th >id</th>
                <th >User id</th>
                <th >Title</th>
                {/* <th style={{border:"1px solid black"}}>body</th> */}
                <th >Delete</th>
              </tr>
               </thead>
               <tbody>
        { 
            
               usersData.users.map((user,i) => {
                  const { id, userId,title,body} = user;
                  return (

                    <tr key={i}>
                    {/* <td >{id}</td> */}
                    <td>{id}</td>
                    <td >{userId}</td>
                    <td >{title}</td>
                    {/* <td style={{border:"1px solid black"}}>{body}</td> */}
                    {/* <td ><AiFillDelete id={id} onClick={()=>onClickDelete(id)}/> </td> */}
                    <td onClick={()=>onClickDelete(id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash" viewBox="0 0 16 16">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                    </td>
                    </tr>
                 
                    
                  );
                })
              
              }
              </tbody>
              </Table>
              </div>
             
              </div>
        </>
    )

}
export default Axios