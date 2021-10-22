
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';


const ModalExample = (props) => {
  const {toggle,onClickSubmit,modal, onChangeTitle}=props
  console.log(onChangeTitle)
  // console.log(props)
  // const {
  
  //   buttonLabel,
  //   className
  // } = props;

  // const [modal, setModal] = useState(false);

//  const  fetchedData=()=> {
//    let data
//     let response=axios.post("https://jsonplaceholder.typicode.com/posts", {
//         title:"post request",
//         body:"post request",
//         userId:1,
//     })
//     .then((response)=> {
//        console.log(response)
//     })
//     .catch((error)=> {
//       console.log(error)
//     })
//   }
//  const onClickSubmit=(e)=> {
//      fetchedData()
//  }
//   const toggle = () =>{
//     setModal(!modal);
    
//   } 

  return (
    <div>
      <Modal isOpen={modal} fade={false} toggle={toggle} >
        <ModalHeader toggle={toggle}>post request</ModalHeader>
        <ModalBody>
         
          <Form inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">title</Label>
        <Input type="email" name="title" id="exampleText" onChange={(e)=>onChangeTitle(e)} placeholder="enter text" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2">body</Label>
        <Input type="text" name="body" id="exampleTxt"onChange={(e)=>onChangeTitle(e)} placeholder="enter text" />
      </FormGroup>
    </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onClickSubmit} >submit</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;