import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import comingSoon from '../../Image/coming-soon.jpg'

export default function project() {
    const projects = [
        {
            title: 'Project 1',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: comingSoon,
        },
        {
            title: 'Project 2',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: comingSoon,
        },
        {
            title: 'Project 3',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: comingSoon,
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
                            <div key={i} className=' border-[1px] border-light h-96 py-8 rounded-xl shadow-md'>
                                <img src={p.image} alt={p.title} className='px-2'/>
                                <div className='px-5'>
                                    <h1 className='text-center my-3 text-mainColor font-semibold'>{p.title}</h1>
                                    <p className='text-justify'>{p.desc}</p>
                                </div>
                                
                            </div>
                        </SwiperSlide>
                    )
                })}
        </Swiper>
    </div>
  )
}
