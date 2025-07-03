import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import pcpLogo from '../../Image/pcp-logo.png'
import ottLogo from '../../Image/ott-logo.png'
import infinityDevLogo from '../../Image/infinity.png'
import Button from '../../Components/Button';
import Abes from '../../Image/ABES.png';

export default function project() {
    const projects = [
         {
            title: 'Abes Media',
            desc: 'Abes Media is a UGC‑focused content agency that helps businesses grow through engaging video content, creative strategy, and hands‑on content production.',
            image: Abes,
            link: 'https://abesmedia.com/',
            tools: 'WordPress, Elementor Pro, JavaScript, CSS'
        },
        {
            title: 'Philippine College of Physicians Website',
            desc: 'The Philippine College of Physicians Official Website is an informational platform related to the organization. It is currently maintained by their IT personnel.',
            image: pcpLogo,
            link: 'https://pcp.org.ph/',
            tools: 'WordPress, Elementor Pro, PHP, JQuery, CSS'
        },
        {
            title: 'Off to Thrift',
            desc: 'Off to Thrift is an e-commerce static website for pre-loved clothes, featuring a payment process.',
            image: ottLogo,
            link: 'https://offtothrift.vercel.app/',
            tools: 'HTML5, CSS, JavaScript, Jquery'
        },
        {
            title: 'Infinity ry dev',
            desc: 'Infinity-ry-dev is a portfolio website that showcases my profile, projects, and work experience.',
            image: infinityDevLogo,
            link: 'https://rydev.vercel.app/',
            tools: 'React, Tailwind CSS, Swiper.js, Vite.js'
        },
    ]
  return (
    <div className='mt-10 w-3/4' id='project'>
        <h1 className='text-mainColor text-xl font-semibold text-center dark:text-lightGreen'>
            Projects
        </h1>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{  
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            }}
            className="mySwiper my-10" 
        >
                {projects.map((p, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <div className='border-[1px] flex flex-col items-center border-light h-[30rem]  py-8 rounded-xl shadow-md lg:h-[27rem] '>
                                <div className='h-32 flex flex-col justify-center'>
                                    <img src={p.image} alt={p.title} className='px-2 w-32 flex m-auto'/>
                                </div>
                                <div className='px-5'>
                                    <h1 className='text-center my-3 text-mainColor font-semibold dark:text-lightGreen'>{p.title}</h1>
                                    <p className='text-justify dark:text-white'>{p.desc}</p>
                                    <p className='text-justify mt-4 text-[12px] dark:text-light'>Tools: {p.tools}</p>
                                </div>
                                <Button link={p.link}/>
                            </div>
                            
                        </SwiperSlide>
                    )
                })}
        </Swiper>
    </div>
  )
}
