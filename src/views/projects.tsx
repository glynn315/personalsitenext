// src/components/Projects.tsx
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Projects() {
    return (
        <div id="projects" className="h-dvh w-full mx-auto z-10 flex flex-col items-center justify-center"
        >
            <div className=" w-[1400px] flex flex-col">
                <span className="text-[100px] font-extrabold opacity-20 text-white leading-none">Projects</span>
                <span className="text-[50px] -mt-10 font-extrabold text-white leading-none">Previous Projects</span>
            </div>
            <div className="mt-16 flex flex-col justify-center items-center w-full px-14">
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={50}
                    slidesPerView={1}
                    className="w-full"
                >
                    <SwiperSlide>
                        <div className="h-96 flex flex-row items-center justify-center text-white text-2xl font-bold rounded-lg shadow-lg px-44">
                            <div className='w-2/4 p-5 flex flex-col'>
                                <div>
                                    <span className='text-[250px] opacity-20 font-extrabold text-white top-0 ml-10 absolute'>01</span>
                                    <span className='z-50 block ml-10'>Co-Working Space Management System</span>
                                </div>
                                <div className='absolute bottom-0 p-10 w-[40%]'>
                                    <span className='font-light text-[20px]'>This system is built to manage time and billing on Confortzone by MJ. Monitor Add Ons and time consume before billing out</span>
                                </div>
                            </div>
                            <div className='w-2/4'>
                                <img src="cwms1.png" alt="" className='w-full' />
                                <img src="cwms2.png" alt="" className='w-90 border-2 border-blue-900 absolute bottom-0 right-20' />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-96 flex flex-row items-center justify-center text-white text-2xl font-bold rounded-lg shadow-lg px-44">
                            <div className='w-2/4 p-5 flex flex-col'>
                                <div>
                                    <span className='text-[250px] opacity-20 font-extrabold text-white top-0 ml-10 absolute'>02</span>
                                    <span className='z-50 block ml-10'>Norala Water Disctrict Billing Monitoring System</span>
                                </div>
                                <div className='absolute bottom-0 p-10 w-[40%]'>
                                    <span className='font-light text-[20px]'>This system is built to manage Billing and can upload receipt for billing and also can monitor monthly consumed and display announcement and memo</span>
                                </div>
                            </div>
                            <div className='w-2/4'>
                                <img src="nwd2.png" alt="" className='w-full block h-full z-10' />
                                <img src="nwd1.png" alt="" className='w-32 block absolute z-50 bottom-0 border border-blue-700 right-40' />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-96 flex flex-row items-center justify-center text-white text-2xl font-bold rounded-lg shadow-lg px-44">
                            <div className='w-2/4 p-5 flex flex-col'>
                                <div>
                                    <span className='text-[250px] opacity-20 font-extrabold text-white top-0 ml-10 absolute'>03</span>
                                    <span className='z-50 block ml-10'>MATHiply</span>
                                </div>
                                <div className='absolute bottom-0 p-10 w-[40%]'>
                                    <span className='font-light text-[20px]'>This app is built to be a learning app for basic education it records scores and focus on multiplications with different categories.</span>
                                </div>
                            </div>
                            <div className='w-2/4 flex flex-row gap-20 justify-center'>
                                <img src="math1.png" alt="" className='w-40 rounded-md' />
                                <img src="math2.png" alt="" className='w-40 rounded-md' />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
