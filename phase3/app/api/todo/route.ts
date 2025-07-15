import { NextResponse } from "next/server";
import { todos } from "@/lib/data";

// GET Request
export async function GET() {

    return NextResponse.json({ status: 200,todos})
}