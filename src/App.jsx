import { useEffect, useState } from "react"
import { TodoProvider } from "./contexts"
import { TodoForm, TodoItem } from "./components"

// NanoId package for id
import { nanoid } from "nanoid"

export default function App() {
  // State value
  const[todos, setTodos] = useState([])

  // Context functionality
  const addTodo = (todo) => {
    setTodos(prev => [{id: nanoid(), ...todo}, ...prev] )
  }

  const updateTodo = (id, todo) => {
    setTodos(prev => prev.map(prevTodo => (prevTodo.id === id ? todo : prevTodo )))
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(prevTodo => id !== prevTodo.id))
  }

  const toggleComplete = (id) => {
    setTodos(prev => prev.map(prevTodos => id === prevTodos.id ? {...prevTodos, completed: !prevTodos.completed} : prevTodos))
  }

  // Getting data from local storage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])
  
  // Setting data in local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  
  const todoList = todos.map(todo => (
    <div 
      key={todo.id} 
      className="w-full"
    >
      <TodoItem todo={todo}/>
    </div>
  ))

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todoList}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}