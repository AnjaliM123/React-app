
import React, { Component } from "react";
import axios from "axios";
import ModalExample from "../httpMethods/Hooks";
import { Table } from 'reactstrap';
import {AiFillDelete} from "react-icons/ai"
class Axios extends Component {
    constructor (props) {
        super(props)
        this.state={users:[],  errors:null}
    }

onClickDelete=(id)=> {
  const response= axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const rows=this.state.users.filter((row)=>row.id!==id)
       this.setState({users:rows})

      let data = [...this.state.users];
    data.splice(id, 1);
    this.setState({data});
}

fetchedData=()=> {

        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=> {
           this.setState({users:response.data.map((user)=> {
                return {
                    id:`${user.id}`,
                    title: `${user.title}`,
                 body: `${user.body}`,
                };
            }),
            isLoading: false,
          });
        })
        .catch((error) => this.setState({ error, }));
    

}
    componentDidMount() {
        this.fetchedData()
      }
      render() {
        const { users } = this.state;
        return (
          <>
           <>
        <div class="modelcontainer">
        <h1>table</h1>
       <ModalExample/>
       </div>
            <Table style={{border:"1px solid black"}}>
            <thead>
              <tr>
                <th style={{border:"1px solid black"}}>id</th>
                <th style={{border:"1px solid black"}}>title</th>
                <th style={{border:"1px solid black"}}>body</th>
                <th style={{border:"1px solid black"}}>delete</th>
              </tr>
        {
            
               users.map((user, id) => {
                  const { title,body} = user;
                  return (
                    
                   
                    <tr key={id}>
                    <td style={{border:"1px solid black"}}>{id}</td>
                    <td style={{border:"1px solid black"}}>{title}</td>
                    <td style={{border:"1px solid black"}}>{body}</td>
                    <td style={{border:"1px solid black"}}><AiFillDelete id={id} onClick={this.onClickDelete(id)}/> </td>
                    </tr>
                  
                    
                  );
                })
             
              }
              </thead>
              </Table>
        
        </>
          </>
        );
      }
    }
    export default Axios

