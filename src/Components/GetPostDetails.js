import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Table,
  Button,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Modal,
  Input,
  FormGroup,
  Label,
  Form,
} from "reactstrap";
import { AiFillDelete } from "react-icons/ai";


import { Link } from "react-router-dom";


import {getPosts} from "../actions/index"
import {useDispatch, useSelector} from "react-redux"

const  GetPostDetails=()=> {
  
const dispatch=useDispatch();
  
const {posts}=useSelector(state=>state.posts&&state.posts.data||{})

console.log(posts)
console.log("posts", posts)
  useEffect(() => {
   dispatch(getPosts());
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="modelcontainer  d-flex flex-row justify-content-startpt-5 pb-5">
            <h1 className="pt-5">Users List</h1>
            <br />
          </div>
          <div className="d-flex fle-row justify-content-end">
            <Button className="" color="primary" >
              Add
            </Button>
          </div>
          <Table striped>
            <thead>
              <tr>
                <th>id</th>
                <th>User id</th>
                <th>Title</th>
                <th>edit</th>
                <th>View</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
                {posts.map((user,i)=> {
                const { id, userId, title, body } = user;

                return (
                  <tr key={i}>
                    <td>{id}</td>
                    <td>{userId}</td>
                    <td>{title}</td>
                    <td>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="red"
                        class="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path
                          fill-rule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}
export default GetPostDetails;
