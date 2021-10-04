import React, { Component, Fragment, useState } from "react";
// first component
class Example extends Component {
  constructor(props) {
    // used for initializing state, binding event handlers
    // calling super(props) method to get the base constructor of the extended class
    console.log(`constructor`);
    super(props);
    this.state = {
      count: 0,
    };
  }
  static getDerivedStateFromProps(props, state) {
    //     // should be first method
    //     // replaced UNSAFE_componentWillMount, UNSAFE_componentWillUpdate and UNSAFE_componentWillReceiveProps methods
    //     // since its static method, so it does NOT have access to (this) keyword, you can call function outside to use it
    //     // used when the state depend on changes in props over time, also used to adding a copy of props value to the state
    //     // return null (to update nothing) or state object {} value (to update the state)
    console.log(`get Derived State From Props`, props, state);
    return null;
  }
  //  // presence of getDerivedStateFromProps or getSnapshotBeforeUpdate methods prevents the 3 methods below from being invoked
  // UNSAFE_componentWillMount() {
  //   // triggered only once before rendering the component at the first time
  //   // replaced componentWillMount in React 16+
  //   console.log(`component Will Mount`);
  // }
  // UNSAFE_componentWillUpdate(nextProps, nextState) {
  //   // triggered each time state change
  //   // changing data according the new state value
  //   // replaced componentWillUpdate in React 16+
  //   console.log(`component Will Update`);
  // }
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   // triggered only if there is a new props value for the component it self
  //   // replaced componentWillReceiveProps in React 16+
  //   console.log(`component Will Receive Props`);
  //   // if(nextProps.whatever && nextProps.whatever !== this.props.whatever){
  //   //    do something here
  //   // }
  // }
  shouldComponentUpdate(nextProps, nextState) {
    // triggered each time state change
    // used if we want to change the state without render the JSX, but best to use PureComponent insted of using this method
    // used for preformance optimaization
    // return false(don't-render) or true(render)
    console.log(`should Component Update`);
    // if(nextProps.whatever && nextProps.whatever !== this.props.whatever){
    //    do something here
    //    return false;
    // }
    return true;
  }
  componentDidMount() {
    // triggered only once after rendering the component and its children at the first time
    // helps to start API calls, adding event listeners
    console.log(`component Did Mount`);
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // return null or value where will passed as thired parameter (snapshot) to the componentDidUpdate
    // used to capture some information from the DOM or to create backup of the current component
    console.log(`get Snapshot Before Update`, prevProps, prevState);
    return 5;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    // triggered each time state change after component re-rendered (updated)
    console.log(`component Did Update`, prevProps, prevState, snapshot);
  }
  /************************************** Unmounting **************************************/
  componentWillUnmount() {
    // triggered before component destroyed or removed from DOM
    // helps to remove event handlers or cleaning up
    console.log(`component Will Unmount`);
  }
  /*********************************** component methods ***********************************/
  set() {
    let count = this.state.count + 1;
    this.setState({ count });
    // setState is asynchronous function takes in callback function
    // this.setState(
    //   () => {
    //     return { count }
    //   },
    //   () => {
    //     console.log('setState has finished and the component has re-rendered (updated)');
    //   }
    // );
  }
  render() {
    // the only required method in React-lifecycke-methods, also read component state and props
    // return JSX
    console.log(`render`);
    return (
      <Fragment>
        <p>In Class Component</p>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.set.bind(this)}>Click me</button>
      </Fragment>
    );
  }
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
