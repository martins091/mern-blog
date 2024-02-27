import React from 'react'
import { Button } from 'flowbite-react'

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500
    justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className='flex-1 justify-center flex flex-col'>
            <h2 className='text-2xl'>
                Want to learn more about JavaScript?
            </h2>
            <p className='text-gray-500 my-2'>
                checkout these resources with 100 JavaScript Projects
            </p>
            <Button className='rounded-tl-xl rounded-bl-none text-white bg-slate-600 px-2 py-1 rounded-lg'>
                <a href="https://my-portfolio-website-iota-flame.vercel.app/" target='_blank'
                rel='noopener noreferrer'>
                    100 JavaScript Projects
                </a>
            </Button>
        </div>
        <div className='flex-1 p-7'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6laB2hAlD5aZL2pSWPXn-m-LPKIag76T7A&usqp=CAU"  />
        </div>
    </div>
  )
}
