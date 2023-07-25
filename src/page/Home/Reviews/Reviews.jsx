import React, { useContext } from 'react'
import Title from '../../../shared/Title/Title'
import { useQuery } from '@tanstack/react-query';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ThemeContext } from '../../../Context/ThemeProvider';

const Reviews = () => {
    const {theme} = useContext(ThemeContext)
    const content = {
        head: "Our Student",
        title: "Reviews"
    }
    const { isLoading, error, data } = useQuery({
        queryKey: ['courses'],
        queryFn: () =>
            fetch('https://uni-booker-server-ghru.vercel.app/reviws').then(res =>
                res.json()
            )
    })
    console.log(data)
    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    return (
        <section>
            <Title content={content}></Title>
            <div className='w-[60%] mx-auto'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={2}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        data.map((data) => <SwiperSlide key={data._id}>
                            <div className={`card rounded-xl shadow-2xl h-[300px] ${!theme ? 'bg-[#1D293A]' : ''}`}>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-accent">{data?.uni_name}</h2>
                                    <div className='flex items-center gap-4'>
                                        <img src={data?.image} alt="user" className='w-[40px] h-[40px] object-cover rounded-full ml-2' />
                                        <small className='text-white'>{data?.name}</small>
                                    </div>
                                    <p className='text-accent'>Student reviw: {data?.reviw}</p>
                                    <p className='text-accent'>rating: {data?.rating}</p>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                      ...
                </Swiper>
            </div>
        </section>
    )
}

export default Reviews