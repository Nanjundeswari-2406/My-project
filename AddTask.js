import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addTaskToServer } from "../slices/tasksSlice";
import {useDispatch} from 'react-redux'

const AddTask = () => {

    const dispatch = useDispatch()

    const [ItemName,setTitle] = useState('')
    const [description,setDescription] = useState('')


    const addTask = (e) => {
        e.preventDefault()
        console.log({ItemName,description})
        dispatch(addTaskToServer({ItemName,description}))
        setTitle('')
        setDescription('')
    }
  return (
    <section className="my-5">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ItemName</Form.Label>
        <Form.Control type="text" placeholder="Enter ItemName "value={ItemName}
         onChange={(e) => setTitle(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>description</Form.Label>
        <Form.Control type="text" placeholder="Enter Item Description" value={description}
        onChange={(e) => setDescription(e.target.value)}/>
      </Form.Group>
      <div className="text-end">
        <Button variant="primary" type="submit" onClick={(e) =>addTask(e)}>
          Add Task
        </Button>
      </div>
    </Form>
    </section>
    );
    };
export default AddTask;
