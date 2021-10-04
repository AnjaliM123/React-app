import React, { Fragment, useEffect, useState } from "react";
// first component
function Example() {
  const [count, setCount] = useState(0);
  //component did mount
  useEffect(() => {
    console.log("useEffect after first render ");
  }, []);
  //componentwillreceiveprops/getDerivedstatefromprops
  useEffect(() => {
    console.log("useEffect whenever props or state is changed");
  }, [count]);
  //component willunmount
  useEffect(() => {
    return () => {
      console.log("useEffect whenever Component is being unmouted from DOM");
    };
  }, []);
  return (
    <Fragment>
      {console.log("in return statement")}
      <p>In react hooks</p>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
    </Fragment>
  );
}
// forth component
const Main = () => {
  const [mount, setMount] = useState(true);
  let toggleComponent = () => {
    setMount(!mount);
  };
  return (
    <div className="app">
      <button onClick={toggleComponent}>Mount / unMount</button>
      {mount && <Example />}
      <br />
    </div>
  );
};
export default Main;