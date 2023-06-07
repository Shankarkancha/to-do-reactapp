import "./AddTask.css"
export const AddTask=(props)=>{
    return (
    <div className='addTask'>
        <input type='text' onChange={props.displaystring}/>
        <button onClick={props.addlist}>Add Task</button>
    </div>
    )
}