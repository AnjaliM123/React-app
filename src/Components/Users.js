import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { usersList } from "../actions";
import BasicTable from "./BasicTable";
// import ReactTable from "react-table";
import ReactTable from "react-table-6";
import 'react-table-6/react-table.css'

const User = () => {
  const users = useSelector((state) => state.users.users);
  console.log(usersList);
  const dispatch = useDispatch();

  // console.log(users.users)
  useEffect(() => {
    dispatch(usersList());
  }, [dispatch]);

  
  const columns = [
    {
      Header:"Id",
      accessor:"id"
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "User Name",
      accessor: "username",
    },
    {
      Header:"email",
      accessor:"email",
    },
    {
      Header:"Phone",
      accessor:"phone",
    }
  ];

  return (
    <>
      <h1>users List</h1>
      <br/>
      {/* {users.users?.length&&users.users.map((each)=> {
     {console.log(each.name)}
     return (
       <>
      <p>{each.name}</p>
      <p>{each.username}</p>
      </>
     )
   })} */}

      <ReactTable columns={columns} data={users} defaultPageSize = {10}  
                  pageSizeOptions = {[2,4, 6]}  />
    </>
  );
};

// const mapStateToProps = (state) => ({
//   users:state.users
//   })
// const mapDispatchToProps = (dispatch) => ({ usersList: () => dispatch(usersList()) })

// export default connect(mapStateToProps)(User)

export default User;
