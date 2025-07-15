import { NextResponse } from "next/server"
import db from '../../../../lib/db'

//POST /api/todo/add
export async function POST(req: Request) {
    const data = await req.json()

    //Adding to the database
    const q = 'insert into todos (todo) values (?)'
    const result = await db.execute(q, [data])

    return NextResponse.json({ status: 201, message: "Successfully added the todo", result })
}