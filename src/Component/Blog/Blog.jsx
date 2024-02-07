import React from 'react'
import * as Images from"../../Assest/Images";
import { AiFillCaretRight } from "react-icons/ai";
const Blog = () => {
  return (
    <div>
      <div className='mt-8'><img src={Images.Image_5} alt=""/></div>
      <div className='flex'>
        <h1 className='bg-green-800 text-white p-2'>Latest Post</h1>
        <span className=' border border-2 w-[1170px]'>
        <AiFillCaretRight className=' w-6 h-8 '/>
        </span>
      </div>
      <div className='flex gap-8 bg-lightgray container'>
      <div>
        <div className='bg-darkgray'>
        <div><img src={Images.Image_6} alt="" className='w-[600px]'/></div>  
        < div className=' bg-white text-center w-[490px] h-[400px] -translate-y-20 ml-12 p-4'>
            <h1 className='text-5xl font-bold mb-4'>60 Minutes To Clear<br/> Goals</h1>
<p className='mb-4'>I think that most people would agree that the people who<br/> have goals are more successful than those who do..</p>

<button className='border border-2 p-2 mb-4'>Readmore</button>
<p>business, entrepreneurship, goals, selfhelp</p>
        </div>
        </div>
        <div className='bg-darkgray'>
        <div><img src={Images.Image_7} alt="" className='w-[600px]'/></div>  
       < div className=' bg-white text-center w-[490px] h-[400px] -translate-y-20 ml-12 p-4'>
            <h1 className='text-5xl font-bold mb-4'>Leadership In <br/>Business</h1>
<p className='mb-4'>Stephen Richards Covey defined leadership as “ leadership<br/> is a way of getting results in a way that inspires trust”....</p>
<p className='mb-4'>ADA/ APRIL30,2023</p>
<button className='border border-2 p-2'>Readmore</button>
        </div>
        </div>
      </div>
      <div>
        <div className='bg-darkgray'>
        <div><img src={Images.Image_8} alt="" className='w-[600px]'/></div>  
        < div className=' bg-white text-center w-[490px] h-[400px] -translate-y-20 ml-12 p-4'>
            <h1 className='text-5xl font-bold mb-4'>4 Rules For New<br/> Entrepreneurs</h1>
<p className='mb-4'>ADA/ APRIL30,2023</p>
<p className='mb-4'>It’s a great time to be an entrepreneur—in the last decade,<br/> technology has leveled the playing eld and propelled an...</p>
<button className='border border-2 mb-4 p-2'>Readmore</button>
<p>business, entrepreneurship</p>
        </div>
        </div>
        <div className='bg-darkgray'>
        <div><img src={Images.Image_9} alt="" className='w-[600px]'/></div>  
        < div className=' bg-white text-center w-[490px] h-[400px] -translate-y-20 ml-12 p-4'>
            <h1 className='text-5xl font-bold mb-4'>Digital Marketing: A<br/> gift that keeps<br/> giving</h1>
<p className='mb-4'>ADA/ APRIL30,2023</p>
<p className='mb-4'>Ever thought about why companies such as Airbnb are one <br/>of the leading companies today? And ever compared these <br/>leading...</p>
<button className='border border-2 p-2'>Readmore</button>
        </div>
        </div>
        <div className='bg-darkgray'>
        <div><img src={Images.Image_10} alt="" className='w-[600px] bg-white'/></div>  
        < div className=' bg-white text-center w-[490px] h-[400px] -translate-y-20 ml-12 p-4'>
            <h1 className='text-5xl font-bold mb-4'>Why Bother Building<br/> A Brand ?</h1>
<p className='mb-4'>Stephen Richards Covey defined leadership as “ leadership<br/> is a way of getting results in a way that inspires trust”....</p>
<p className='mb-4'>ADA/ APRIL30,2023</p>
<button className='border border-2 p-2'>Readmore</button>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Blog
