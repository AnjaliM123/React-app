import React, { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import axios from "axios";
import { Button } from "reactstrap";

function PostDetails(props) {
  const { match } = props;

  const { params } = match;
  const { id } = params;

  useEffect(() => {
    fetchedData();
    console.log(match);
  }, []);

  const onClickBack = () => {
    const { history } = props;
  
    console.log("click");
    history.goBack();
  };

  const [itemData, setItemData] = useState({ posts: [], errors: null });

  const fetchedData = async () => {
    console.log(props)
    let data1;
    console.log(props.location.search.substring(1))
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?id=${props.location.search.substring(1)}`
      );
      //console.log(response)
      data1 = response.data.map((user) => {
        return {
          id: `${user.id}`,
          title: `${user.title}`,
          body: `${user.body}`,
        };
      });
      setItemData((prevState) => ({ ...prevState, posts: data1 }));
    } catch (e) {
      setItemData((prevState) => ({ ...prevState, errors: e }));
    }
  };

  console.log(itemData);

  return (
    <>
      {itemData.posts.map((eachUser) => {
        const { id, title, body } = eachUser;
        return (
          <div key={id}>
            <p>id: {id}</p>
            <p>title: {title}</p>
            <p>body: {body}</p>
            <hr />
            <Button onClick={() => onClickBack()}>back</Button>
          </div>
        );
      })}

      {/* <h1>text</h1> */}
    </>
  );
}

export default PostDetails;
