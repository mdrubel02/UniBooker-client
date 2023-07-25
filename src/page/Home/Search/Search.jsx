import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { AiOutlineSearch } from 'react-icons/ai';
import { ThemeContext } from '../../../Context/ThemeProvider';
import { Link } from 'react-router-dom';

const Search = () => {
    const {theme} = useContext(ThemeContext)
    const [searchResults, setSearchResults] = useState([]);
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        const name = data.name
        const response = await fetch(`https://uni-booker-server-ghru.vercel.app/search/${name}`);
        const jsonData = await response.json();
        setSearchResults(jsonData);
    }
    console.log(searchResults)
    return (
        <div>
            <div>
                <div className='relative'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: "Name is required!" })} type="text relative" placeholder="Type here" className="input input-bordered input-accent focus-none w-full max-w-lg" />

                        <button type="submit">
                            <span className='absolute top-4 right-96 text-accent cursor-pointer'><AiOutlineSearch className='text-lg text-accent' /></span>
                        </button>
                    </form>
                </div>
                <div className='mt-8'>
                    {
                        searchResults.map((item) => <div key={item?._id} className={`card rounded-xl shadow-2xl h-[400px] ${!theme ? 'bg-[#1D293A]' : ''}`}>
                            <figure className='h-48 rounded-md mx-auto w-[90%] mt-4'><img className='h-full grayscale rounded-md hover:grayscale-0 transition-all duration-700 ease-in hover:scale-[1.2]' src={item?.college_image} alt="Shoes" /></figure>
                            <div className="card-body py-4">
                                <h2 className="card-title text-white text-center">{item?.college_name}</h2>
                                <p className='text-white'>Admission Date:{item?.admission_date}</p>
                                <p className='text-white'>Facultiy:{item?.research_count}</p>
                                <p className='text-white'>Rating:{item?.college_rating}</p>
                            </div>
                            <div className="card-actions flex justify-center mb-4">
                                <Link to={`/collegeDetails/${item?._id}`}><button className="btn btn-accent btn-sm text-white btn-outline">Details</button></Link>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Search