import { NextResponse } from "next/server";
import db from '../../../lib/db'
import { todos } from "@/lib/data";

// GET Request
export async function GET() {
    const q = "select * from todos"
    const [result] =await db.execute(q)
    console.log(result)
    return NextResponse.json({ status: 200, todos:result })
}
