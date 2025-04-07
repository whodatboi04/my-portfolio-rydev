import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import comingSoon from '../../Image/coming-soon.jpg'
import pcpLogo from '../../Image/pcp-logo.png'
import ottLogo from '../../Image/ott-logo.png'
import infinityDevLogo from '../../Image/infinity.png'
import Button from '../../Components/Button';


export default function project() {
    const projects = [
        {
            title: 'Philippine College of Physicians Website',
            desc: 'The Philippine College of Physicians Official Website is an informational platform related to the organization. It is currently maintained by their IT personnel.',
            image: pcpLogo,
            link: 'https://pcp.org.ph/',
        },
        {
            title: 'Off to Thrift',
            desc: 'Off to Thrift is an e-commerce static website for pre-loved clothes, featuring a payment process.',
            image: ottLogo,
            link: 'https://offtothrift.vercel.app/',
        },
        {
            title: 'Infinity ry dev',
            desc: 'Infinity-ry-dev is a portfolio website that showcases my profile, projects, and work experience.',
            image: infinityDevLogo,
            link: 'https://rydev.vercel.app/',
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
                {projects.map((p,i) => {
                    return (
                        <SwiperSlide>
                            <div key={i} className='border-[1px] flex flex-col items-center border-light h-[30rem]  py-8 rounded-xl shadow-md lg:h-[27rem] '>
                                <div className='h-32 flex flex-col justify-center'>
                                    <img src={p.image} alt={p.title} className='px-2 w-32 flex m-auto'/>
                                </div>
                                <div className='px-5'>
                                    <h1 className='text-center my-3 text-mainColor font-semibold'>{p.title}</h1>
                                    <p className='text-justify'>{p.desc}</p>
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
