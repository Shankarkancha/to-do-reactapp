import "./Task.css"
export const Task=(props)=>{
    return(
        <div  className="taskview" style={{backgroundColor:props.completed?"green":"rgb(252, 111, 111)"}}>
          <h1>{props.taskname}</h1>
          <div>
          <button onClick={()=>props.Completetask(props.id)}>Complete</button>
          <button onClick={()=>props.deletelistvalue(props.id)}>X</button>
          </div>
          </div>
      ) 
}