import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {Button, ModalFooter,Input,Label,FormGroup, ModalHeader, Modal, ModalBody} from "reactstrap"

import {connect} from 'react-redux'

import { renderTextField } from '../../ReduxField'
import {required} from "../../constants/index"



const EditPost = (props) => {
    const {toggle,update}=props
    const onSubmit=(e)=> {
        console.log(e)
        toggle(toggle)
    }
    const { handleSubmit} = props
  return (
    <Modal isOpen={update} fade={false} toggle={toggle}>
        <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} >
      <ModalHeader toggle={toggle}>update request</ModalHeader>
      
        <Field name="title" label="Title" component={renderTextField} validate={required} type="text" />
        <Field name="body" label="body" component={renderTextField} validate={required} type="text" />

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


  
//   export default EditPost

// const mapStateToProps = (state) => {
//     return {
//       initialValues: {
//         firstName: state.EditPost.firstName,
//       }
//     }
//   }
// export default connect(mapStateToProps)(reduxForm({ form: 'EditPost', enableReinitialize: true})(EditPost))


const mapStateToProps = (state, props) => ({
    initialValues: state.initialName, 
  })
  
  export default connect(
    mapStateToProps
  )(reduxForm({
     form: 'simple', 
     enableReinitialize: true,
  })(EditPost))