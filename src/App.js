
import { useState } from 'react';
import './App.css';
import {Task} from "./Task";
import {AddTask} from "./AddTask";
function App() {
   const [list,setaddlist]=useState([]);
   const [string,setstring]=useState("");

   const displaystring=(event)=>{
    setstring(event.target.value);
   }

   const addlist=()=>{
    const task={
      id:list.length===0?1:list[list.length-1].id+1,
      taskname: string,
      completed:false,
    }
    setaddlist([...list,task]);
   }
   const deletelistvalue=(id)=>{
    const newlist=list.filter((listname)=>{
      return id===listname.id ? false:true;
    })
    setaddlist(newlist);
   }

   const Completetask=(id)=>{
      setaddlist(list.map((task)=>{
        if(task.id===id){
          return {...task,completed:true};
        }
        else{
          return task;
        }
      }))
      
   }
   console.log(list);
  return (
    <div className='App'>
       <AddTask displaystring={displaystring} addlist={addlist}/>
      <div className='list'>{list.map((value)=>{
        return <Task taskname={value.taskname} id={value.id} completed={value.completed} deletelistvalue={deletelistvalue} Completetask={Completetask}/>
      })}</div>
    </div>
  );
}

export default App;
