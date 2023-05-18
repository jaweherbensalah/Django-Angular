import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const TodoDetail = () => {

const [todo, setTodo] = useState([])

const {id} = useParams();
const history = useNavigate();

useEffect(() => {
    getSingleTodo();
},[])


const getSingleTodo = async () => {
  const  { data } = await axios.get(`http://127.0.0.1:8000/api/${id}/`)
  console.log(data);
  setTodo(data);
  

}

const deleteTodo = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/${id}/`)
    history("/")
}



    return (
        <div>
            <h2>Detail of Single Todos </h2>
            <hr></hr>
            <div className="full-todo-detail">
               
                <div className="todo-detail">
                    <p>{todo.id}</p>
                    {/* <p>{todo.image}</p> */}
                    <p>{todo.name}</p>
                    <p>{todo.desciption}</p>
                    <p>{todo.price}</p>
                    <img src={todo.image} height="300" width="500"/>
                </div> 
            </div>
           

          

            <Link className="btn btn-outline-primary mr-2" to={`/${todo.id}/update`}>Update</Link>
        {/* <Link className="btn btn-danger" onClick={() => deleteTodo(todo.id)}> Delete</Link>   */}
            <button className="btn btn-danger" onClick={()=>{deleteTodo(todo.id)}}>Delete</button> 

          
        </div>
    );
};

export default TodoDetail;