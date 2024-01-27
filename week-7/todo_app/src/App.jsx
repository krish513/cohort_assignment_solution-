import { useState } from "react"
import { RecoilRoot, selector, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { filter, filterAtom, todosAtom } from "./store/atom/todos";

function App() {
  
  return (
    <div>
      <RecoilRoot>
        <Todos/>
      </RecoilRoot>
    </div>
  )
}

function Todos(){
  const todos = useRecoilValue(filter)
  return <div>
    <CreateTodos/>
    <FindTodo/>
    { todos.map((todo) => <div>
      <h2>{todo.title}</h2>
      <h3>{todo.description}</h3>
    </div> )}
  </div>
}

function CreateTodos(){
  const [todos, setTodos] = useRecoilState(todosAtom) 
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  
  function addTodoHandler(){
    setTodos([...todos,{
      title,
      description
    }]);
  }

  return <div>
    <input type="text" placeholder="Title"
      onChange={(e)=> setTitle(e.target.value)}
    ></input>
    <input type="text" placeholder="Description"
    onChange={(e)=> setDescription(e.target.value)}
    ></input>
    <button onClick={addTodoHandler}>Add Todo</button>
  </div>
}


function FindTodo(){
  const setFilter = useSetRecoilState(filterAtom)

  function filterHandler(e){
    setFilter((pre) => e.target.value)
  }

  return <div>
    <input type="text" placeholder="find todo"
      onChange={filterHandler}
    >
    </input>
  </div>
}


export default App
