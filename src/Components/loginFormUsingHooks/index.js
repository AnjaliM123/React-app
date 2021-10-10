import React, {useState} from "react"
import {  Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Hooks (props) {
    const [input, setInput]=useState("");

    const [number, setNumber]=useState(0)
    setNumber((prevCount)=>prevCount+1)
    const [select, setSelect]=useState(false)
    
    const [object, setObject]=useState({
        text:""
    })
     const [array, setArray]=useState(["string"])

    const onChangeObject=(event)=> {
        // setObject({...object, [event.target.name]:event.target.value})
        setObject((values)=>({...values, [event.target.name]:event.target.value}))
    }
console.log(object)
    const onChangeArray=(event)=> {
        setArray(array.concat("concat"));
    }

    const onSubmitForm=(event)=> {
        event.preventDefault()
    }

    return (
        <Form onSubmit={onSubmitForm}>
            <FormGroup>
                <Label>name</Label>
                <Input type="text"  placeholder="Enter name" name= "name" onChange={event => setInput(event.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label>number</Label>
                <Input type="number" placeholder="Enter number" name="number" onChange={event=>setNumber(event.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label>object</Label>
                <Input type="text" placeholder="Enter object" name="objectText" onChange={event=>onChangeObject(event)} />
            </FormGroup>
            <FormGroup>
                <Label>array</Label>
                <Input type="text" placeholder="Enter array" name="array" onChange={onChangeArray}/>
            </FormGroup>
            <FormGroup>
                <Label check>
                    <Input onClick={()=>{setSelect(!select)}} name="checkbox" className="remeber" type="checkbox" />{' '}
                        Remember me
                </Label>
            </FormGroup>
            <Button type="submit">login</Button>
        </Form>
    )

}
export default Hooks
