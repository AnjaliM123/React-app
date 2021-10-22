import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {Button, ModalFooter, ModalHeader, Modal, } from "reactstrap"



import { renderTextField } from '../../ReduxField'
import {required} from "../../constants/index"

const EditPost = (props) => {

    const {updateToggle,update}=props
    const onSubmit=(formProps)=> {
        console.log(formProps)
        
        updateToggle()
    }

    console.log(props.initialValues)

    const { handleSubmit} = props
  return (
    <Modal isOpen={update} fade={false} toggle={updateToggle}>
        <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
      <ModalHeader toggle={updateToggle}>update request</ModalHeader>
      
        <Field name="title" label="Title" component={renderTextField} validate={required}  />
        <Field name="body" label="body" component={renderTextField} validate={required}  />

      <ModalFooter>
        <Button color="primary" type="submit">
          submit
        </Button>{" "}
      </ModalFooter>
      </form>
      </div>
    </Modal>
  );
};


  
  //  export default EditPost
  export default reduxForm({
    form: 'EditPost', 
    enableReinitialize:true,// a unique identifier for this form
  })(EditPost)

// const mapStateToProps = (state, props) => ({
//     initialValues: state.initialName, 
//   })
  

//   export default connect(
//     mapStateToProps
//   )(reduxForm({
//      form: 'EditPost', 
//      enableReinitialize: true,
//   })(EditPost))