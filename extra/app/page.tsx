"use client"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

//User interface
interface userTypes {
  id: number
  name: string
  email: string
}

export default function Home() {
  const [users, setUsers] = useState<userTypes[]>([])

  //  Getting the user data from the backend
  const getUser = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        cache: "force-cache"
      })

      const data = await res.json()
      console.log(data)
      setUsers(data)
    }

    catch (err) {
      console.log(err)
      // throw new Error(err)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <main className="h-screen w-full flex flex-wrap p-3 gap-3">
      {
        users.length > 0 && users.map((user, index) => {
          return (
            <Card key={index} className="p-3">
              <CardHeader>
                <CardTitle>User {user.id}</CardTitle>
                <CardDescription>{user.name}</CardDescription>
              </CardHeader>

              <CardFooter>
                <p>{user.email}</p>
              </CardFooter>

              <Button>Add friend</Button>
            </Card>
          )
        })
      }
    </main>
  )
}