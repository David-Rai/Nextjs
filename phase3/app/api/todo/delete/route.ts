import { todos } from "@/lib/data"
import { NextResponse } from "next/server"

//Deleting the todo /api/todo/delete
export async function DELETE(req: Request) {
    const { id } = await req.json()

    //Deleting from the database
    const index = todos.findIndex((_, i) => i === id);
    if (index !== -1) {
        todos.splice(index, 1); // ✅ removes the item in-place
    }


    return NextResponse.json({ status: 200, id })

}