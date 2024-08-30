import ToDoInput from "./components/todoinput"
import ToDoList from "./components/ToDoList"
import { useState, useEffect} from "react"


function App() {

  const [todos, setTodos] = useState([]);
  const [newValue, setNewValue] = useState('');
  // default edit flag is false
  const [editingTodo, setEditingTodo] = useState(false);
  // set default editIndex value to be 0 for simplicity as this default value would
  // never be accessed
  const [editIndex, setEditIndex] = useState(0);

  function retainUserData(newList) {
    localStorage.setItem('todos', JSON.stringify({todos: newList}));
  }

  function add(newItem) {
    if (newItem) {
      if (editingTodo === false) {
        const updatedToDos = [...todos, newItem];
        retainUserData(updatedToDos);
        setTodos(updatedToDos);
      }
      else {
        const updatedToDos = [...todos];
        updatedToDos.splice(editIndex, 0, newItem);
        retainUserData(updatedToDos);
        setTodos(updatedToDos);
        // flip edit flags back
        setEditingTodo(false);
        setEditIndex(0);
      }
    }
  }

  function deleteItem(index) {
    const updatedToDos = todos.filter((_, todoIndex) => {
      return todoIndex !== index;
    })  
    retainUserData(updatedToDos);
    setTodos(updatedToDos);
  }

  function edit(index) {
    const editedValue = todos[index];
    setNewValue(editedValue);
    deleteItem(index);
    setEditingTodo(true);
    setEditIndex(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }
    
    let localTodos = localStorage.getItem('todos');
    if (!localTodos) {
      return
    }

    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
    // below empty [] means whenever page reloads this will take effect
    // [] include the change condition for this to take effect
    // e.g. [todos] means if todos changes, this effect will take place
  }, [])

  return (
    <>
      <ToDoInput add={add} newValue={newValue} setNewValue={setNewValue}/>
      <ToDoList todos={todos} deleteItem={deleteItem} edit={edit}/>
    </>
  )
}

export default App;
