import React, { useContext } from 'react'
import MyCollegeSingle from './MyCollegeSingle'
import { ThemeContext } from '../../Context/ThemeProvider'
import { useQuery } from '@tanstack/react-query'

const MyCollege = () => {
  const {theme} = useContext(ThemeContext)
  const { isLoading, error, data } = useQuery({
    queryKey: ['choice'],
    queryFn: () =>
      fetch('https://uni-booker-server-ghru.vercel.app/choice').then(res =>
        res.json()
      )
  })
  console.log(data)
  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
  return (
    <div className={`w-[88%] mx-auto ${!theme ? 'text-white' : ''}`}>
    <h1 className='text-center text-4xl font-bold mt-14 mb-12 text-accent'>My Choice Univercity</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 my-16'>
      {
        data.map((data) => <MyCollegeSingle key={data._id} data={data}></MyCollegeSingle>)
      }
    </div>
  </div>
  )
}

export default MyCollege