import React, { useState,useEffect } from 'react'
import db from './firebase';
import firebase from 'firebase';
import Task from './Task';
import './Todo.css'


const Todo = () => {
      const [todo, settodo] = useState('');
      const [input, setinput] = useState([])

         useEffect(() => {
             gettodo();
            //  here we get all the value from database when the app loads first 
            // here orderBy show all the todos in decresing order with same exact time all over the world 

         }, [])

         const gettodo = ()=>{
             
          db.collection("todos").orderBy("timestamp","desc").onSnapshot(function(querysnapshot){
              setinput(
                  querysnapshot.docs.map((doc)=>({
                      id:doc.id,
                      todo:doc.data().todo,
                  }))
              );
          });

         }
        

      const addtodo = (e)=>{
        e.preventDefault();
         db.collection('todos').add({
             todo: todo ,
             timestamp : firebase.firestore.FieldValue.serverTimestamp()

         })
        //   setinput([...input, todo]);
          settodo('');
      }
     
     


    return (
        <div className= "container">
      <div className="todoinput"> <form action="submit">
        <input type="text" className="input" value={todo} onChange= {(e)=>settodo(e.target.value)} />
        <button className ="todobutton" onClick={addtodo} disabled={!todo} >add todo 🚀 </button></form>
        <p className= "all-todos">
            {
               input.map((todo)=>(
                   <Task  todo={todo.todo}
                   id ={todo.id}  />
               ))
            }
           
        </p>
            </div>
        </div>
    )
}

export default Todo;
