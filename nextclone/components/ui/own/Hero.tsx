import vercel from '../../.././public/vercel.svg'
import { Button } from "@/components/ui/button"
import Image from 'next/Image'

export default function Page() {
    return (
        <main className="h-full w-full flex flex-col items-center justify-end mb-18 gap-[60px] text-white">

            {/* Heading */}
            <h1 className="text-center text-6xl font-extrabold bg-gradient-to-br from-white to-neutral-400 bg-clip-text text-transparent">
                The React Framework for the Web
            </h1>


            {/* Description */}
            <div className="flex flex-col items-center justify-center text-[#848484] text-xl">
                <h1>Used by some of the worlds largest companies, Next.js enables you to create
                    <span className="text-gray-100 pl-2">high-</span></h1>
                <h1><span className="text-white px-2">quality web applications</span>with the power of React components.</h1>

            </div>

            {/* Buttons */}
            <div className="flex flex-col items-center justify-center h-[100px]">
                <div className="flex p-2 h-[100px] gap-4">
                    <Button variant="secondary" className="text-black h-[45px] w-[120px] text-md font-semibold">Get Started</Button>
                    <Button className="text-gray-200 font-medium h-[45px] w-[120px] text-md border-[0.3px] border-[#353535]">Learn Next.js</Button>
                </div>
                <div className='flex items-center gap-2 justify-evenly'>
                    <Image
                        src={vercel}
                        alt="adasd"
                        height={15}
                        width={15}
                    />
                    <p>~</p>
                    <p className="text-[#848484]">npx create-next-app@latest</p>
                </div>
            </div>


        </main>
    );
}