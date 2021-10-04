import {Component} from "react"

class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state={count:0}
    }


    static getDerivedStateFromProps(props, state) {
        console.log("get derived state from props :", props,state);
        return  null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("should component update")
        return 5;
    }

    getSnapshotBeforeUpdate() {
        console.log("get snapshot  before update");
        return 5;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("component did update");
    }

    componentDidMount() {
        console.log("component did mount");
    }

    componentWillUnmount() {
        console.log("component will unmount")
    }

    onClickButton=()=> {
                this.setState((prevState)=>({count:prevState.count+1}))
    }


    render () {
        console.log("render");
        const {count}=this.state
        return (
            <div>
                <h>class component</h>
                <p>count {count}</p>
                <button type="button" onClick={this.onClickButton}>Click</button>
            </div>
        )
    }
}export default ClassComponent