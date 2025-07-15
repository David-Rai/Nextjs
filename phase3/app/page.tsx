"use client"
import { useEffect, useRef, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";


//Interface for the todos
interface todoType{
id:number,
todo:string
}
export default function Page() {


  // throw new Error("Test error!"); // simulate error

  const [todos, setTodos] = useState<todoType []>([])
  const inputRef = useRef<null | HTMLInputElement>(null)

  //Getting all the todos from db
  const getAll = async () => {
    const res = await fetch('/api/todo', {
      method: "GET",
    })
    const data = await res.json()
    console.log(data.todos)
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
    console.log(result)
    getAll()
  }

  //Handling key down
  const handleKey = (e:KeyboardEvent) => {
    // console.log(e)
    if (e.code === "Enter") {
      handleAdd()
    }
  }

  // MAIN JSX
  return (
    <main className="flex h-screen w-full items-center justify-center flex-col bg-gray-900">
      <h1 className="text-2xl text-white mb-4">Todo list</h1>

      {/* All todos */}
      <div className="flex flex-col gap-3 w-[300px] max-w-full">
        {todos.length > 0 && todos.map((todo, index) => (
          <div
            key={index}
            className="flex bg-gray-800 px-4 py-2 rounded-md h-[45px] items-center justify-between border border-gray-700"
          >
            <span className="text-gray-200">{todo?.todo}</span>
            <button
              onClick={() => handleDelete(todo.id)}
              className="text-red-400 hover:text-red-300 transition-colors"
            >
              <MdDeleteOutline size={18} />
            </button>
          </div>
        ))}
      </div>

      {/* Add new todo */}
      <div className="flex gap-3 bg-gray-800 h-[50px] rounded-md items-center justify-between px-4 mt-6 w-[300px] max-w-full border border-gray-700">
        <input
          type="text"
          placeholder="New todo"
          onKeyDown={()=>handleKey}
          ref={inputRef}
          className="bg-transparent text-gray-200 placeholder-gray-500 focus:outline-none w-full"
        />
        <button
          onClick={handleAdd}
          className="text-green-400 hover:text-green-300 transition-colors"
        >
          <IoMdAdd size={22} />
        </button>
      </div>
    </main>
  );
}