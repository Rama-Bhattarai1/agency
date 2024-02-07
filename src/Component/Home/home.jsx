import React from 'react'
import * as Images from"../../Assest/Images";
const home = () => {
  return (
    <div className=' bg-black h-[470px] w-[1270px]'>
    <div className=' relative  '>
    <img src={Images.Image_3}alt="" className='bg-black  h-[470px] w-[1270px] opacity-15 ' />
    <div className='absolute top-0 mt-10 ml-8'>
    <h1 className=' text-5xl text-white  font-bold mb-10'>
Anchor Digital Agency <br/>Your Trusted Technology Partner For <br/>Ideation, Growth, and Success</h1>
<p className='text-white'>At Anchor Digital Agency, We deliver powerful IT solutions to help businesses like yours grow and succeed.<br/> Our expert team provides Web Development, Digital Marketing and other IT services. We are your trusted<br/> partner for customized solutions and unparalleled customer support. Contact us today to Brainstorm.</p>
    </div>
    </div>
    </div>
  )
}

export default home
