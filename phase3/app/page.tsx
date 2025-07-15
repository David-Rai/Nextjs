"use client"
import { useEffect, useRef, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

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

  //Handling key down
  const handleKey = (e: KeyboardEvent) => {
    // console.log(e)
    if (e.code === "Enter") {
      handleAdd()
    }
  }

  // MAIN JSX
  return (
    <main className="flex h-screen w-full items-center justify-center flex-col bg-gray-200">
      <h1 className="text-2xl ">Todo list</h1>


      {/* All todos */}
      <div className="flex flex-col gap-4">
        {
          todos.length > 0 && todos.map((todo, index) => {
            return (
              <div key={index} className=" flex bg-white px-3 rounded-md h-[40px] items-center justify-between">
                <li>
                  {
                    todo
                  }</li>
                <button onClick={() => handleDelete(index)} className="ml-3 text-red-500">
                  <MdDeleteOutline />
                </button>
              </div>
            )
          })
        }
      </div>

      {/* Add new todo */}
      <div className="flex gap-5 bg-gray-100 h-[50px] rounded-md items-center justify-between px-3 m-4">
        <input type="text" placeholder="New todo"
          onKeyDown={()=>handleKey}
          ref={inputRef} className="focus:border-0 focus:outline-0" />
        <button onClick={handleAdd}>
          <IoMdAdd size={20} />
        </button>
      </div>
    </main>
  );
}