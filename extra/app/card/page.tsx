"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
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
  username: string
  company: {
    name: string
  }
}

export default function Home() {
  const [users, setUsers] = useState<userTypes[]>([])

  //  Getting the user data from the backend
  const getUser = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        cache: "no-cache"
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
    <main className="h-screen w-full flex p-3 gap-3 flex-col">
      <div className="w-full flex flex-wrap justify-evenly gap-3">
      <h1 className="text-2xl w-full">Users</h1>
        {
          users.length > 0 && users.map((user, index) => {
            return (
              <Card key={index} className="p-3 w-[40%] bg-red-300">
                <CardHeader className="w-[30vw]">
                  <div className="flex items-center justify-start gap-2">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <CardTitle>User {user.name}</CardTitle>
                  </div>
                  <CardDescription>{user.email}</CardDescription>
                </CardHeader>

                <CardFooter className="flex flex-col items-start">
                  <p>{user.company.name}</p>
                  <div className="flex gap-3 py-2">
                    <Button>Add friend</Button>
                    <Badge>{user.username}</Badge>
                  </div>
                </CardFooter>
              </Card>
            )
          })
        }
      </div>
    </main>
  )
}