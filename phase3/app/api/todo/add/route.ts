import { NextResponse } from "next/server"
import { todos } from "@/lib/data"

//POST /api/todo/add
export async function POST(req: Request) {
    const data = await req.json()
    todos.push(data)

    return NextResponse.json({ status: 201, message: "Successfully added the todo" })
}