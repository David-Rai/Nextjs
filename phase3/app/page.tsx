"use client"
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const [todos, setTodos] = useState([])
  const inputRef = useRef<null | HTMLInputElement>(null)

  //Getting all the todos from db
  const getAll = async () => {
    const res = await fetch('/api/todo', {
      method: "GET",
    })
    const data = await res.json()
    console.log(data)
    setTodos(data.todos)
  }
  useEffect(() => {
    getAll()
  }, [])

  //Handling adding the new todo
  const handleAdd = async () => {
    const todo = inputRef?.current?.value
    if (todo === "") return

    // console.log(inputRef?.current?.value)
    const res = await fetch('/api/todo/add', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(todo)
    })
    const result = await res.json()
    console.log("back ", result)
    if (result.status) {
      if (inputRef.current) {
        inputRef.current.value = "";
      }
      getAll()
    }
  }

  //Deleting the todo
  const handleDelete = async (index: number) => {
    console.log(index)
    const res = await fetch("/api/todo/delete", {
      method: "DELETE",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({ id: index })
    })

    const result = await res.json()
    console.log("Delte res", result)
    getAll()
  }

  // MAIN JSX
  return (
    <main className="flex h-screen w-full items-center justify-center flex-col">
      <h1>Todo lists</h1>


      {/* All todos */}
      <div className="flex flex-col">
        {
          todos.length > 0 && todos.map((todo, index) => {
            return (
              <div key={index}>
                <li>
                  {
                    todo
                  }</li>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            )
          })
        }
      </div>

      {/* Add new todo */}
      <div>
        <input type="text" placeholder="New todo" ref={inputRef} />
        <button onClick={handleAdd}>Add</button>
      </div>
    </main>
  );
}