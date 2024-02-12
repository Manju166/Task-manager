import React, { useState } from 'react'
import './Task.css'
const Task = () => {
    const [allTask,setAllTask]=useState([]);
    const[task,setTask]=useState("");
    const[edit,setEdit]=useState(null);
    const [editItem,setEditItem]  = useState(true);

    const handleAdd=()=>{
        if (task===""){
            alert("Please enter a task!");
        }else if(task && !editItem){
            setAllTask(
                allTask.map((elem)=>{
                    if(elem.id=== edit){
                        return{...elem,content:task};
                    }return elem;
                })
            )
            setEditItem(true);
            setTask("");
            setEdit(null);
        }
        else{
            const  newTask={id:new Date().getTime().toString(),content:task};
            setAllTask([...allTask,newTask]);
            setTask("");
        }
    };
      const handleDelete=(index)=> {
        const deletedTasks = allTask.filter((elem)=> index !== elem.id );
        setAllTask(deletedTasks);
      };
      const handleEdit=(id)=>{
        console.log('edited');
          const itemToEdit=allTask.find((elem) => elem.id===id);
          console.log(itemToEdit);
          setEditItem(false);
          setTask(itemToEdit.content);
          setEdit(id);
      }
  return (
    <>
    <div className="tt">
        <h1>Task Manager</h1>
        <div className="inpvalu">
        <input type="text" placeholder="Add New Task" value={task} onChange={(e)=>setTask(e.target.value)}/>
        {editItem?<button onClick={handleAdd}>Add Task</button>:
        <button onClick={handleAdd}>Edit Task</button>}
        </div>
    </div>
    
<ol>
    {allTask.map((item)=>
    <div key={item.id} className="tsk">
       <h3><li>{item.content}</li></h3>
    <div className="btn">
        <button onClick={()=>handleEdit(item.id)}>Edit</button>
        <button onClick={()=>handleDelete(item.id)}>Delete</button>
        </div>
        </div>
    )}
    </ol>
    </>
  )
}
export default Task;
