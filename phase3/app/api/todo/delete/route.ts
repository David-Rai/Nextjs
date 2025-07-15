import { NextResponse } from "next/server"
import db from '../../../../lib/db'

//Deleting the todo /api/todo/delete
export async function DELETE(req: Request) {
    const { id } = await req.json()

    //Deleting from the database
    const q = 'delete from todos where id = ?'
    const result = await db.execute(q, [id])

    console.log(result)

    return NextResponse.json({ status: 200, result })

}