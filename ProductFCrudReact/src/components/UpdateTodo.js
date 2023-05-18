import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateTodo = () => {

  let history = useNavigate();
  const { id } = useParams();

  // const [image, setImage] = useState(null)
  const [task_title, setTaskTitle] = useState(null)
  const [task_description, setTaskDescription] = useState(null)
  const [created_at, setCreatedAt] = useState(null)
  const [updated_at, setUpdatedAt] = useState(null)




  useEffect(() => {
    loadTodos();
  }, [])


  // load todo list by its is and show data to forms by value

  let loadTodos = async () => {
    const result = await axios.get(`http://127.0.0.1:8000/api/${id}`);
    console.log(result.data.name);
    //retrieve data to form fields
    // setImage(result.data.image);
    setTaskTitle(result.data.name);
    setTaskDescription(result.data.desciption);
    setCreatedAt(result.data.price);
    setUpdatedAt(result.data.category);
  }


  // Update a single todo by id

  const updateSingleTodo = async () => {
    let formField = new FormData()

    formField.append('task_title', task_title)
    formField.append('task_description', task_description)
    formField.append('created_at', created_at)
    formField.append('updated_at', updated_at)

    // if(image !== null) {
    //   formField.append('image', image)
    // }

    await axios({
      method: 'PUT',
      url: `http://localhost:8000/api/${id}/`,
      data: formField
    }).then(response => {
      console.log(response.data);
      history("/");
    })

  }

  return (

    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Update A Todo</h2>


        {/* <div className="form-group">
      <img src={image} height="100" width="200" alt="" srcSet="" />
    <label>Upload Image</label>
         <input type="file" className="form-control" onChange={(e)=>setImage(e.target.files[0])}/>
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
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter update date"
            name="updated_at"
            value={updated_at}
            onChange={(e) => setUpdatedAt(e.target.value)}
          />
        </div>
        <button onClick={updateSingleTodo} className="btn btn-primary btn-block">Update </button>

      </div>
    </div>

  );
};

export default UpdateTodo;









