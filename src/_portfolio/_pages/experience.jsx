import React from 'react'
import pcpLogo from '../../Image/pcp-logo.png'
import depedLogo from '../../Image/deped-logo.png'

export default function experience() {
  return (
    <div className='my-10 w-3/4' id='experience'>
        <h1 className='text-mainColor text-xl font-semibold text-center dark:text-lightGreen'>
            Experiences
        </h1>
        <div className=''>
            <div className='mt-10 flex justify-center h-[400px]'>
                <ul className='pr-10'>
                    <li className='flex flex-col items-center lg:items-start lg:flex-row'>
                        <img 
                            src={pcpLogo}
                            alt='Philippine College of Physicians'
                            className='w-14 mb-2 lg:w-20'
                        />
                        <div className='ml-5'>
                            <h2 className='text-dark text-[10px] font-extrabold lg:text-sm'>PHILIPPINE COLLEGE OF PHYSICIANS</h2>
                            <p className=' text-[10px] lg:text-sm'>IT Programmer</p>
                            <p className='text-lightColor text-[9px] lg:text-sm'>09/2023 - Present</p>
                        </div> 
                    </li>
                </ul>
                <ul className='h-[320px] px-5 relative flex flex-col justify-between mt-2 items-center overflow-hidden'>
                    <li className='bg-mainColor rounded-full w-4 h-4  relative after:content-[""] after:absolute after:bg-mainColor after:w-[5px] after:left-[5px] after:h-screen after:-z-10'></li>
                    <li className='bg-mainColor rounded-full w-4 h-4 z-10 relative'></li>
                </ul>
                <ul className='flex flex-col-reverse pl-10'>
                    <li className='flex flex-col items-center lg:flex-row-reverse lg:items-start'>
                        <img 
                            src={depedLogo} 
                            alt='Philippine College of Physicians'
                            className='w-14 mb-2 lg:w-20'
                        />
                        <div className='mr-5'>
                            <h2 className='text-dark text-[10px] font-extrabold text-right lg:text-sm'>Department Of Education Manila</h2>
                            <p className='text-right text-[10px] lg:text-sm'>IT Specialist</p>
                            <p className='text-lightColor text-[9px] lg:text-sm text-right'>02/2023 - 07/2023</p>
                        </div> 
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
