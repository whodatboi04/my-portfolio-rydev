import React from 'react'
import pcpLogo from '../../Image/pcp-logo.png'
import depedLogo from '../../Image/deped-logo.png'
import pisoPayLogo from '../../Image/pisopay.png'

export default function experience() {
  return (
    <div className='my-10 w-3/4' id='experience'>
        <h1 className='text-mainColor text-xl font-semibold text-center dark:text-lightGreen'>
            Experiences
        </h1>
        <div>
            <div className='mt-10 flex justify-center h-[400px]'>
                <ul className='pr-10 flex flex-col justify-center'>
                    <li className='flex flex-col items-center lg:items-start lg:flex-row'>
                        <img 
                            src={pcpLogo}
                            alt='Philippine College of Physicians'
                            className='w-14 mb-2 lg:w-20'
                        />
                        <div className='ml-5'>
                            <h2 className='text-dark text-[10px] font-extrabold lg:text-sm dark:text-lightGreen'>PHILIPPINE COLLEGE OF PHYSICIANS</h2>
                            <p className=' text-[10px] lg:text-sm dark:text-tWhite'>IT Programmer</p>
                            <p className='text-lightColor text-[9px] lg:text-sm'>09/2023 - 02/2025</p>
                        </div> 
                    </li>
                </ul>
                <ul className='h-[320px] px-5 relative flex flex-col justify-between mt-2 items-center overflow-hidden'>
                    <li className='bg-mainColor rounded-full w-4 h-4  relative after:content-[""] after:absolute after:bg-mainColor after:w-[5px] after:left-[5px] after:h-screen after:-z-10 dark:z-10'></li>
                    <li className='bg-mainColor rounded-full w-4 h-4 z-10 relative dark:z-20'></li>
                    <li className='bg-mainColor rounded-full w-4 h-4 z-10 relative dark:z-20'></li>
                </ul>
                <ul className='flex flex-col justify-between pl-10'>
                    <li className='flex flex-col items-center lg:items-start lg:flex-row'>
                        <img 
                            src={pisoPayLogo}
                            alt='PisoPay.com.ph Logo'
                            className='w-12 mb-2 lg:w-20'
                        />
                        <div className='ml-5'>
                            <h2 className='text-dark text-[10px] font-extrabold lg:text-sm dark:text-lightGreen'>Pisopay.com Inc.</h2>
                            <p className=' text-[10px] lg:text-sm dark:text-tWhite'>Back-End Developer</p>
                            <p className='text-lightColor text-[9px] lg:text-sm'>02/2025 - Present</p>
                        </div> 
                    </li>
                    <li className='flex flex-col items-center lg:flex-row-reverse lg:items-start'>
                        <img 
                            src={depedLogo} 
                            alt='Department Of Education Manila Logo'
                            className='w-14 mb-2 lg:w-20'
                        />
                        <div className='mr-5'>
                            <h2 className='text-dark text-[10px] font-extrabold text-right lg:text-sm dark:text-lightGreen'>Department Of Education Manila</h2>
                            <p className='text-right text-[10px] lg:text-sm dark:text-tWhite'>IT Specialist</p>
                            <p className='text-lightColor text-[9px] lg:text-sm text-right'>02/2023 - 07/2023</p>
                        </div> 
                    </li>
                </ul>
                
            </div>
        </div>
    </div>
  )
}
