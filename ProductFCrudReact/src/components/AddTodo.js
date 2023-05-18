import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const AddTodo = () => {

    let history = useNavigate();


    //  task_title task_description created_at updated_at  completed
    const [task_title, setTaskTitle] = useState(null)
    const [task_description, setTaskDescription] = useState(null)
    const [created_at, setCreatedAt] = useState(null)
    const [updated_at, setUpdatedAt] = useState(null)


    const addNewTodo= async () => {
        let formField = new FormData()
        formField.append('task_title',task_title)
        formField.append('task_description',task_description)
        formField.append('created_at',created_at)
        formField.append('updated_at',updated_at)

 

        await axios({
          method: 'post',
          url:'http://localhost:8000/api/',
          data: formField
        }).then(response=>{
          console.log(response.data);
          history('/')
        })
    }
   
    return (
        <div className="container">
            <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Todo</h2>
        
{/* 
        <div className="form-group">
        <label>Image</label>
             <input type="file" className="form-control" onChange={(e)=>setImage(e.target.files[0])}/>
          </div> */}
{/* 
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div> */}
         
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter task title"
              name="task_title"
              value={task_title}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter task description"
              name="task_description"
              value={task_description}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter creation date"
              name="created_at"
              value={created_at}
              onChange={(e) => setCreatedAt(e.target.value)}
            />
          </div>
          <button className="btn btn-primary btn-block" onClick={addNewTodo}>Add Todo </button>
       
      </div>
    </div>
        </div>
    );
};

export default AddTodo;