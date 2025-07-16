
// "use client"

import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

export default function Page() {
  return (
    <main className="flex h-screen w-full flex-col lg:flex-row">

      {/* Left */}
      <div className="w-full h-1/2 lg:w-[40%] lg:h-full flex flex-col">
        <nav className="h-[20%] w-full flex items-center justify-between px-5">
        <FaArrowLeft />
          <ul className="flex items-center justify-center gap-3">
            <li>About</li>
            <li>Home</li>
          </ul>
          <FaTwitter className="text-blue-600"/>
        </nav>

        <div className="center w-full h-[80%] flex flex-col gap-3 items-start pl-[40px] justify-center">
          <h1 className="text-5xl font-bold">Hello,</h1>
          <p className="w-[80%] lg:w-[70%] text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Provident deserunt laborum sequi cum cumque recusandae
            tempora doloremque, magni rem libero.</p>
          <h3 className="font-medium underline text-xl">Read</h3>
        </div>
      </div>

      {/* Right */}
      <div className="h-1/2 lg:h-full w-full lg:w-[60%]">
        <div className="relative w-full h-1/2">
          <Image
          src="https://images.unsplash.com/photo-1531618760866-6809c75dcc45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsdWUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"
            alt="this is top image"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Bottom */}
        <div className="h-1/2 w-full flex">
          <div className="relative w-1/2 h-full">
            <Image
            src="https://plus.unsplash.com/premium_photo-1675667390417-d9d23160f4a6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="this is top image"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="relative w-1/2 h-full">
            <Image
              src="https://plus.unsplash.com/premium_photo-1675667881424-9bd504919c09?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="this is top image"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}