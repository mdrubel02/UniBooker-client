import React from 'react'
import { useLoaderData } from 'react-router-dom';

const CollegeDetails = () => {
    const data = useLoaderData();
    console.log(data)
  return (
    <div className='w-[88%] mx-auto'>
    <div className="w-full rounded-lg mt-5 mb-9">
        <img alt='' src={data?.college_image} className="w-full h-[390px] rounded-xl" />
    </div>

    <div className='flex gap-x-6'>
        <div className='w-[45%]'>
            <h1 className='font-bold text-3xl mb-2'>{data?.college_name}</h1>
            <h3 className='font-semibold text-md mb-2'>{data?.admission_date}</h3>
            <div>
            </div>
        </div>
    </div>
</div>
  )
}

export default CollegeDetails