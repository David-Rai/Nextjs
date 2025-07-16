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

export default async function Home() {

await new Promise((reslove)=> setTimeout(reslove,5000))

  //  Getting the user data from the backend
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const users: userTypes[] = await res.json()
  console.log(users)

  return (
    <main className="h-screen w-full flex p-3 gap-3 flex-col">

      <div className="w-full flex flex-wrap justify-evenly gap-3">
        <h1 className="text-2xl w-full">Users</h1>
        {
          users.length > 0 && users.map((user, index) => {
            return (
              <Card key={index} className="p-3">
                <CardHeader className="w-[30vw] flex">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <CardTitle>User {user.name}</CardTitle>
                    <CardDescription>{user.email}</CardDescription>
                  </div>
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