import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ShowTodo = () => {

    const [todos, setTodo] = useState([])

    const fetchtodo = async () => {
        const response = await axios.get('http://localhost:8000/api/');
        console.log(response.data)
        /*this method will state or list all the information of the todo class */
        setTodo(response.data)
    }
    useEffect(() => {
        fetchtodo();
    }, [])

    console.log("test technique",todos);

    const exportData = () => {
      const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
        JSON.stringify(todos)
      )}`;
      const link = document.createElement("a");
      link.href = jsonString;
      link.download = "data.json";
  
      link.click();
    };

    return (
        <div>
             <input></input>
    <h2>Click here to export annotated data</h2>
      <button type="button" onClick={exportData}>
        Export Data
      </button>
            <div className="main-todo-show">
                {
                    todos.map((todo, index) => (
                        <Card className="m-3 rounded shadow-lg main-todo-show" style={{ width: '22em' }}>

                            <Card.Body>
                               
                                {/* <Card.Title>{todo.id}</Card.Title> */}
                                <Card.Text> {todo.desciption} </Card.Text>
                                

                                <Link className="btn btn-primary mr-2" to={`/${todo.id}`}>Full Detail</Link>

                            </Card.Body>
                        </Card>
                    ))

                }
            </div>


        </div>
    );
};

export default ShowTodo;