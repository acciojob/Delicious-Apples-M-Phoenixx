import React from 'react';
import db from './firebase';
import './Task.css'


const Task = ({todo ,id}) => {
   

    function deleteTodo() {
        db.collection("todos").doc(id).delete();
      }
    return (
        <div className="task">
      <div className="todo">  {todo  }  😄
      </div>
        <button className = "delete" onClick={deleteTodo} >delete</button>
        
            
        </div>
    )
}

export default Task;
