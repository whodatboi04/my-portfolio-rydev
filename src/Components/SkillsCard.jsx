import React from 'react'
import { 
    FaBrain, 
    FaCode 
} from "react-icons/fa";
import html from '../Image/html-5.png'
import css from '../Image/css-3.png'
import js from '../Image/js.png'
import react from '../Image/react.png'
import tailwind from '../Image/tailwind.png'
import bootstrap from '../Image/bootstrap.png'
import php from '../Image/php.png'
import mysql from '../Image/mysql.png'
import laravel from '../Image/laravel.png'
import postman from '../Image/postman.png'
import cSharp from '../Image/c-sharp.png'
import wordpress from '../Image/wordpress.png'
import elementor from '../Image/elementor.png'
import github from '../Image/github.png'
import git from '../Image/git.png'
import figma from '../Image/figma.png'
import frontEnd from '../Image/ui-design.png'



export default function SkillsCard() {
    const frontend = [
        {
            image: html,
            alt: 'HTML 5',
            title: 'HTML5'
        },
        {
            image: css,
            alt: 'CSS 3',
            title: 'CSS3'
        },
        {
            image: js,
            alt: 'JavaScript',
            title: 'JavaScript'
        },
        {
            image: react,
            alt: 'React JS',
            title: 'ReactJS'
        },
        {
            image: tailwind,
            alt: 'Tailwind Css',
            title: 'Tailwind'
        },
        {
            image: bootstrap,
            alt: 'Bootstrap',
            title: 'Bootstrap'
        }
    ]
    const backend = [
        {
            image: php,
            alt: 'PHP',
            title: 'PHP'
        },
        {
            image: mysql,
            alt: 'MySql',
            title: 'MySql'
        },
        {
            image: laravel,
            alt: 'Laravel',
            title: 'Laravel'
        },
        {
            image: postman,
            alt: 'Postman',
            title: 'Postman'
        }
    ]
    const others = [
        {
            image: cSharp,
            alt: 'C#',
            title: 'C Sharp'
        },
        {
            image: wordpress,
            alt: 'Wordpress',
            title: 'Wordpress'
        },
        {
            image: elementor,
            alt: 'Elementor',
            title: 'Elementor'
        }, 
        {
            image: github,
            alt: 'GitHub',
            title: 'GitHub'
        },
        {
            image: git,
            alt: 'Git',
            title: 'Git'
        },
        {
            image: figma,
            alt: 'Figma',
            title: 'Figma'
        }
    ]
  return (
    <div className='flex flex-col gap-8 items-center lg:flex-row dark:text-white'>
        <div className='border-[1px] border-light w-56 h-72 p-5 rounded-[15px] shadow-md'>
            <div className='flex items-center gap-2 justify-center'>
                <img src={frontEnd} alt='frontend-logo' className="w-12 lg:w-[29px]"/>
                <h2 className='text-[16px] text-tBalck font-semibold'>Frontend Skills</h2>
            </div>
            <div className='grid grid-cols-3'>
                {frontend.map((s,i) =>{
                    return (
                        <div className='flex flex-col items-center gap-1 justify-center mt-8' key={i}>
                            <img src={s.image} alt={s.alt} className="w-[35px]"/>
                            <h3 className='text-[9px] text-tBalck font-semibold'>{s.title}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className='border-[1px] border-light w-56 h-72 p-5 rounded-[15px] shadow-md'>
            <div className='flex items-center gap-2 justify-center'>
                <FaCode size={20} className='dark:text-white'/>
                <h2 className='text-[16px] text-tBalck font-semibold'>Backend Skills</h2>
            </div>
            <div className='grid grid-cols-3'>
                {backend.map((s,i) =>{
                    return (
                        <div className='flex flex-col items-center gap-1 justify-center mt-8' key={i}>
                            <img src={s.image} alt={s.alt} className="w-[35px]"/>
                            <h3 className='text-[9px] text-tBalck font-semibold'>{s.title}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className='border-[1px] border-light w-56 h-72 p-5 rounded-[15px] shadow-md'>
            <div className='flex items-center gap-2 justify-center'>
                <FaBrain size={20} className='dark:text-white'/>
                <h2 className='text-[16px] text-tBalck font-semibold'>Other Skills</h2>
            </div>
            <div className='grid grid-cols-3'>
                {others.map((s,i) =>{
                    return (
                        <div className='flex flex-col items-center gap-1 justify-center mt-8' key={i}>
                            <img src={s.image} alt={s.alt} className="w-[35px]"/>
                            <h3 className='text-[9px] text-tBalck font-semibold'>{s.title}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
    
  )
}
