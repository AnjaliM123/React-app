import React, { useEffect,useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { postUsers } from "../actions";
import { Field, reduxForm } from "redux-form";

import { Label, Input } from "reactstrap";
import { required } from "../constants";




const renderTextField = ({
    input,
    label,
    type,
    value,
    meta: { touched, error, warning },
    custom,
  }) => (
    <div>
      <Label>{label}</Label>
      <div>
        <Input {...input} value={input.value} placeholder={label} type="text" />
        {touched &&
          ((error && <span className="error">{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  );

const PostUsers = (props) => {
    const [modal, setModal] = useState(false);
    const [usersData, setUSersData]= useState([])
    const toggle = () => {
        setModal(!modal);
      };

  const users = useSelector((state) => state.postUsers.postUsers);
 
  const dispatch = useDispatch();

 
//   useEffect(() => {
//     dispatch(postUsers());
//   }, [users]);

 useEffect(()=> {
    console.log(users)
 },[users])
const onSubmit=(formProps)=> {
    console.log(formProps)
    toggle()
}
const { handleSubmit} = props
  return (
    <>
      <h1>users List</h1>
      
      <Button  onClick={toggle}>ADD</Button>
      <Modal isOpen={modal} fade={false} toggle={toggle}>
        <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
      <ModalHeader toggle={toggle}>update request</ModalHeader>
      
        <Field name="name" label="Name" component={renderTextField} validate={required}  />
        <Field name="userName" label="User Name" component={renderTextField} validate={required}  />

      <ModalFooter>
        <Button color="primary" type="submit" onClick={()=>dispatch(postUsers())}>
          submit
        </Button>{" "}
      </ModalFooter>
      </form>
      </div>
    </Modal>
      <br/>
    </>
  );
};


// export default PostUsers;
export default reduxForm({
    form: 'AddUsers', 
  })(PostUsers)