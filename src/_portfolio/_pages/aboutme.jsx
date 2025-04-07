import React from 'react'
import SkillsCard from '../../Components/SkillsCard'
import profileAboutMe from '../../Image/my-img-front.png'


export default function aboutme() {
    
  return (
        <section className='flex flex-col w-3/4 mt-10 gap-8 lg:gap-20 lg:flex-row' id='aboutMe'>
            <div className='flex flex-col p-0 m-auto lg:m-0 lg:justify-center'>
                <img 
                    src={profileAboutMe}
                    className='rounded-full mt-10 min-w-72 m-auto md:w-[20rem] lg:m-0 '
                    alt='My Picture'
                />
            </div>

            <div className='border-2'>
                <div className='flex flex-col items-center mt-8 lg:items-start lg:jutify-center px-5 lg:p-5 md:px-32 lg:w-full'>
                    <h1 className='text-mainColor text-xl font-semibold dark:text-lightGreen'>
                        About Me
                    </h1>
                    <p className='text-lightColor text-justify lg:text-justify text-md leading-8 md:leading-9 dark:text-white'>
                        A <span className='text-mainColor dark:text-lightGreen'>self-motivated</span> and <span className='text-mainColor dark:text-lightGreen'>
                                enthusiastic i
                            </span> 
                        ndividual IT graduate from
                        Universidad de Manila, equipped with a diverse skill set in 
                        <span className='text-mainColor dark:text-lightGreen'> communication</span>, <span className='text-mainColor dark:text-lightGreen'>collaboration</span>, and <span className='text-mainColor dark:text-lightGreen'>analytical thinking</span>. Committed to 
                        continuous learning, I thrive on exploring new horizons for personal 
                        and professional growth.
                    </p>
                    <div className='flex flex-col items-center mt-8 lg:items-start lg:jutify-center lg:w-full'>
                        <h1 className='text-mainColor text-xl font-semibold mt-4 dark:text-lightGreen'>
                            Skills
                        </h1>
                        <div className='flex justify-center mt-6 md:justify-normal'>
                            <SkillsCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
