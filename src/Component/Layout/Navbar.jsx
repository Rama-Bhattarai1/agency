import React from 'react'
import * as Images from"../../Assest/Images";
import { Link } from 'react-router-dom';
// import { Button } from '../Shared/Button';
const Navbar = () => {
  return (
    <div className='bg-primary flex justify-between h-20'>
      <div className='w-40 h-40'> 
<img src={Images.Image_1}alt="" />
      </div>
      <div>
      <ul className='flex  text-white mt-6 gap-4'>
      <Link to="/"><li>Home</li></Link>
      <Link to="/about"><li>About Us</li></Link>
      <Link><li>Services</li></Link>
      <Link to="/blog"><li>Blog</li></Link>
      <Link><li>Contact Us</li></Link>
      </ul>
      </div>
     
    </div>
  )
}

export default Navbar
