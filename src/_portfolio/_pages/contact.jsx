import React from 'react'

export default function contact() {

  const contactButton = () =>{
    window.open('https://www.linkedin.com/in/rynmrkdlsrys/', '_blank');
  }

  return (
    <div id='contact'>
        <h1 className='text-mainColor text-xl font-semibold text-center dark:text-lightGreen mt-10 mb-5'>
            Let's Get In Touch          
        </h1>
        <div className='flex flex-col items-center'>
            <p className='text-lightColor text-lg w-3/4 text-center dark:text-tWhite'>Hello, I am looking for new opportunities in web development. I am excited to discuss this further. Let's connect!</p>
            <button onClick={contactButton} className='bg-mainColor w-40 p-3 rounded-md my-10 text-tWhite'>Contact Me</button>
        </div>
    </div>
  )
}
