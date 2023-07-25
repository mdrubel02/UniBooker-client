import React from 'react'
import Search from './Search/Search'
import Gallery from './Gallery/Gallery'
import Reviews from './Reviews/Reviews'

const Home = () => {
  return (
    <div className='mt-8'>
      <Search />
      <Gallery />
      <Reviews />
    </div>
  )
}

export default Home