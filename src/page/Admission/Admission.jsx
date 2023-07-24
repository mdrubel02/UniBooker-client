import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeProvider'

const Admission = () => {
  const {theme} = useContext(ThemeContext)
  const collegeName = ["Sonarga University", "Asia University", "brack University", "United University", "University of Dhaka", "BUET University"]
  return (
    <div className={`w-[80%] mx-auto mt-8 ${!theme ? 'text-white' : ''}`}>
      <div className=' h-8  bg-accent'>
        <h4>improtant notice here</h4>
      </div>
      <ul>
        {
          collegeName.map((college) => <li>{college}</li>)
        }
      </ul>
    </div>
  )
}

export default Admission