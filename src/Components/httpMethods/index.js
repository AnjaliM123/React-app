import axios from "axios";
import React , {  useEffect, useState } from 'react';
import { Table } from 'reactstrap';
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

const onChangeTitle=(event)=> {return event.target.value}


const onChangeBody=(event)=> {return event.target.value}

const onClickSubmit=()=> {
      let addData
      const article={title:"request body", userId:usersData.users.length+1, body:"request post"}
      const headers={'Content-type': 'application/json; charset=UTF-8',}
      axios.post("https://jsonplaceholder.typicode.com/posts", article, {headers})
      .then((response)=> {
       
       addData=(response.data)
        console.log(addData)
            usersData.users.splice(0,0,addData)
       //setUsersData((prevState)=> ({...prevState, users:addData}))
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
         const deleted=usersData.users.splice(id,1)
         const rows=usersData.users.filter(row=>row.id!==deleted.id)
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
        <div class="modelcontainer">
        <h1>table</h1>
       <AddPost toggle={toggle} modal={modal} onClickSubmit={onClickSubmit} onChangeTitle={onChangeTitle} onChangeBody={onChangeBody} />
       </div>
       <Table striped>
            <thead>
              <tr>
                <th >s.no</th>
                <th >id</th>
                <th >title</th>
                {/* <th style={{border:"1px solid black"}}>body</th> */}
                <th >delete</th>
              </tr>
        { 
            
               usersData.users.map((user) => {
                  const { id,userId,title,body} = user;
                  return (
                    
                   
                    <tr key={id}>
                    <td >{id}</td>
                    <td >{userId}</td>
                    <td >{title}</td>
                    {/* <td style={{border:"1px solid black"}}>{body}</td> */}
                    {/* <td ><AiFillDelete id={id} onClick={()=>onClickDelete(id)}/> </td> */}
                    <td onClick={()=>onClickDelete(id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                    </td>
                    </tr>
                  
                    
                  );
                })
              
              }
              </thead>
              </Table>
        
        </>
    )

}
export default Axios