import React from 'react'

export default function contact() {
  return (
    <div>
        <h1 className='text-mainColor text-xl font-semibold text-center dark:text-lightGreen mt-10 mb-5'>
            Let's Get In Touch          
        </h1>
        <div className='flex flex-col items-center'>
            <p className='text-lightColor text-lg w-3/4 text-center'>Hello, I am looking for new opportunities in web development. I am excited to discuss this further. Let's connect!</p>
            <button className='bg-mainColor w-40 p-3 rounded-md my-10 text-tWhite'>Contact Me</button>
        </div>
    </div>
  )
}
