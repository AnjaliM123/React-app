import React, { useEffect,  } from "react"
import { useDispatch, useSelector } from "react-redux"
import {getUsers} from "../actions/index"

const Post=()=> {
   let dispatch=useDispatch()
    const users=useSelector(state=>state.users&& state.users.users||{})
    console.log("users",users,users.users, users.data)

   useEffect(()=> {
      dispatch(getUsers())
    },[dispatch])


   return (
      <div>
         <h1>list</h1>
         {users.data?.results.length&&users.data.results.map((eachUser) => {
              return (
                <div>
                  <p>{eachUser.name.first}</p>
                </div>
              );
            })}
            </div>
   )
}

export default Post