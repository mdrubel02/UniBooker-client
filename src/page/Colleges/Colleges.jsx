import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import SingleCollege from './SingleCollege'
import { ThemeContext } from '../../Context/ThemeProvider';

const Colleges = () => {
  const { theme} = useContext(ThemeContext);
  const { isLoading, error, data } = useQuery({
    queryKey: ['courses'],
    queryFn: () =>
      fetch('http://localhost:5000/college').then(res =>
        res.json()
      )
  })
  console.log(data)
  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
  return (
    <div className={`w-[88%] mx-auto ${!theme ? 'text-white' : ''}`}>
      <h1 className='text-center text-4xl font-bold mt-14 mb-12'>My Projects</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 my-16'>
        {
          data.map((data) => <SingleCollege key={data._id} data={data}></SingleCollege>)
        }
      </div>
    </div>
  )
}

export default Colleges