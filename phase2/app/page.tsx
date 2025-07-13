"use client"

import { useState } from "react";

export default function Page() {
const [count,setCount]=useState<number>(0)

  return (
    <main className="h-screen w-full flex items-center justify-center flex-col gap-5">
      <h1>count - {count}</h1>
      <button onClick={()=> setCount(count + 1)}>increase</button>
    </main>
  );
}