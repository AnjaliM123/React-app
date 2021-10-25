import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import {usersList} from "../actions"

const User=({usersList,users} )=> {

  console.log(usersList)
  const dispatch=useDispatch()
  
console.log(users.users)
  useEffect(()=> {
   usersList()
  }, [])


  return (
    <>
    <h1>users</h1>
   {users.users?.length&&users.users.map((each)=> {
     {console.log(each.name)}
     return (
      <p>{each.name}</p>
     )
   })}
    </>
  )
}

const mapStateToProps = (state) => ({
  users:state.users
  })
const mapDispatchToProps = (dispatch) => ({ usersList: () => dispatch(usersList()) })

export default connect(mapStateToProps, mapDispatchToProps)(User)