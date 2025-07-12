import Image from "next/image";

export default function Page() {
  return (
    <main className="flex h-screen w-full"
    >
      {/* Left */}
      <div className="w-1/2 h-full flex flex-col">
        <nav className="h-[20%] w-full flex items-center justify-between px-5">
          <ul className="flex items-center justify-center gap-3">
            <li>About</li>
            <li>Home</li>
          </ul>
        </nav>

        <div className="center w-full h-[80%] flex flex-col gap-3 items-start pl-[40px] justify-center">
          <h1 className="text-5xl font-bold">Hello,</h1>
          <p className="w-[70%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Provident deserunt laborum sequi cum cumque recusandae
            tempora doloremque, magni rem libero.</p>
          <h3 className="font-medium underline text-xl">Read</h3>
        </div>
      </div>

      {/* Right */}
      <div className="h-full w-1/2 bg-amber-300">
        <div className="relative w-full h-1/2"> 
          <Image
            // className="absolute h-[40px]"
            src="https://images.unsplash.com/photo-1531618760866-6809c75dcc45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsdWUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"
            alt="this is top image"
            fill
            priority
          />
        </div>
      </div>
    </main>
  );
}