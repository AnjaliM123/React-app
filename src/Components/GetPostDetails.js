import axios from "axios";
import React, { useEffect } from "react";
import { Table, Button } from "reactstrap";
import { AiFillDelete } from "react-icons/ai";

import { Link } from "react-router-dom";

import { getPosts } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";

const GetPostDetails = () => {
  const dispatch = useDispatch();

  // const posts = useSelector(
  //   (state) => (state.posts && state.posts.allPosts) || {}
  // );
  const posts = useSelector((state) => state.posts.allPosts);
  // console.log("posts", posts)
  console.log("posts", posts);
  // console.log("posts", posts)
  // console.log("postData", posts.posts.data)
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
            <Button className="" color="primary">
              Add
            </Button>
          </div>
          <Table striped>
            <thead>
              <tr>
                <td>Id</td>
                <td>Title</td>
                {/* <td>body</td> */}
                <td>Edit</td>
                <td>View</td>
                <td>Delete</td>
              </tr>
            </thead>
            <tbody>
              {/* {posts.data &&
                posts.data.map((eachUser, i) => { */}
              {posts?.length &&
                posts.map((eachUser) => {
                  return (
                    // <div>
                    //   <p>{eachUser.title}</p>
                    //   <p>{eachUser.body}</p>
                    // </div>
                    <tr>
                      <td>{eachUser.id}</td>
                      <td>{eachUser.title}</td>
                      {/* <td>{eachUser.body}</td> */}
                      <td>
                        <Button color="secondary">Edit</Button>
                      </td>
                      <td>
                        <Button color="secondary">View</Button>
                      </td>
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
};
export default GetPostDetails;
