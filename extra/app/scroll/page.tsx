"use client"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from 'react'
import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

//User interface
interface userTypes {
    id: number
    name: string
    email: string
}


export default function CarouselDemo() {

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
        <main className="flex h-screen w-full items-center justify-center">
            <Carousel className="w-full max-w-xs">
                <CarouselContent>
                    {users && users.map((user, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card className="p-3">
                                    <CardHeader>
                                        <CardTitle>User {user.id}</CardTitle>
                                        <CardDescription>{user.name}</CardDescription>
                                    </CardHeader>

                                    <CardFooter>
                                        <p>{user.email}</p>
                                    </CardFooter>

                                    <Button>Add friend</Button>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </main>
    )
}
