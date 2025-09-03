import { useState } from 'react'
import './App.css'

function App() {
 const [toDoList, setToDoList] = useState([]);
  let saveToDoList = (event)=>{
    let todoname = event.target.todoname.value;
    if(!toDoList.includes(todoname)){
      let finalToDoList = [...toDoList,todoname];
      setToDoList(finalToDoList);
    }else{
      alert("element is already in the list");
    }
    event.preventDefault();
  }
  let list = toDoList.map((value,index)=>{
    return (
      <ToDoListItems value={value} key={index} indexNumber={index} toDoList={toDoList} setToDoList={setToDoList}/>
    )
  })
   return (
    <>
      <div className="App">
 
      <h1>ToDo List</h1>
        <form onSubmit={saveToDoList}>
          <input type="text" name='todoname' />
          <button>ADD</button>
        </form>
        <div className="outerDiv">
          <ul>
            {list}
          </ul>
        </div>
      </div>
    </>
   )
}

export default App;

function ToDoListItems({value , indexNumber , toDoList , setToDoList}){
  const [status , setStatus] = useState(false);
  let deleteRow =()=>{
    let filteredToDo = toDoList.filter((v,i)=>indexNumber!=i)
    setToDoList(filteredToDo);
  }
  let checkStatus = () => {
    setStatus(!status);
  }
  return(
    <li onClick={checkStatus} className={status ? 'completetodo ': ''}> {value} <span onClick={deleteRow}>&times;</span></li>
  )
}