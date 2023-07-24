import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeProvider';
import { Link } from 'react-router-dom';

const SingleCollege = ({ data }) => {
    const { theme } = useContext(ThemeContext);
    const { college_image, college_name, college_rating, admission_date,research_count,_id} = data;
  return (
    <div className={`card rounded-xl shadow-2xl h-[400px] ${!theme ? 'bg-[#1D293A]' : ''}`}>
                <figure className='h-48 rounded-md mx-auto w-[90%] mt-4'><img className='h-full grayscale rounded-md hover:grayscale-0 transition-all duration-700 ease-in hover:scale-[1.2]' src={college_image} alt="Shoes" /></figure>
                <div className="card-body py-4">
                    <h2 className="card-title">{college_name}</h2>
                    <p>Admission Date:{admission_date}</p>
                    <p>Facultiy:{research_count}</p>
                    <p>Rating:{college_rating}</p>
                </div>
                <div className="card-actions flex justify-center mb-4">
                    <Link to={`/collegeDetails/${_id}`}><button className="btn btn-accent btn-sm text-white btn-outline">Details</button></Link>
                </div>
        </div>
  )
}

export default SingleCollege