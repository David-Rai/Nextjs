// a82e1638bb274d6380d4593d17c43b7f
"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'


type memeType = {
    description: string,
    url: string,
    type: string
}
const Center = () => {
    const [meme, setMeme] = useState<memeType | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    //Get the images from the main function
    const get = async () => {
        setIsLoading(true)
        const res = await fetch('/api/meme')
        const data = await res.json()
        setIsLoading(false)
        setMeme(data)
    }

    // Do this at first
    useEffect(() => {
        get()
    }, [])


    //Main jsx
    return (
        <>


            {/* MEME section */}
            <div className='text-white'>
                {
                    meme && (
                        <div>
                            <h1 className='w-full flex items-center p-3 justify-center min-h-[40px] text-xl'>{meme?.description}</h1>
                            <div className='rounded-lg'>
                                <img
                                    className='h-[400px] w-full lg:w-[400px] p-3 rounded'
                                    src={meme?.url}
                                    alt={meme?.type}
                                />
                            </div>
                        </div>
                    )
                }
            </div>
            {/* Button */}
            <div>
                <button
                    onClick={get}
                    className="text-gray-200
                 hover:bg-purple-500 transition-all 
                 duration-150 h-[40px] w-[160px] 
                 rounded-md bg-purple-600">
                    {
                        isLoading ? "loading la sathy..." : "Get new Meme"
                    }
                </button>
            </div>
        </>

    )
}

export default Center