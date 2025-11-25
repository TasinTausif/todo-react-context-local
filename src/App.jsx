import { useState } from "react"
import { TodoProvider } from "./contexts"
import { nanoid } from "nanoid"

export default function App() {
  // State value
  const[todos, setTodos] = useState([])

  // Context functionality
  const addTodo = (todo) => {
    const newTodo = {
      id: nanoid(),
      todo: todo,
      completed: false
    }

    setTodos(prev => [...prev, newTodo])
  }

  const updateTodo = (id, todo) => {
    setTodos(prev => {
      prev.map(prevTodo => {
        id === prevTodo.id ? todo : prevTodo
      })
    })
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(prevTodo => id !== prevTodo.id))
  }

  const toggleComplete = (id) => {
    setTodos(prev => prev.map(prevTodos => id === prevTodos.id ? {...prevTodos, completed: !prevTodos.completed} : prevTodos))
  }

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}