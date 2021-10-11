import {Component} from "react"
import "./index.css"

class Counter extends Component {
    state={count:0}

    onClickClick=()=> {
        this.setState((prevState)=>({count:prevState.count+1}))
    }

    render () {
        const {count}=this.state
        return (
            <div className="container">
            <div className="main-container">
                <h1 className="counter-heading">Counter Application</h1>
                <div>
                    <h1 className="count-heading">Count: {count}</h1>
                    <button type="button" className="button" onClick={this.onClickClick}>Click</button>
                    
                </div>
            </div>
            </div>
        )
    }

}
export default Counter