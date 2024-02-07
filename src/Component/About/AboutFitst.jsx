import React from 'react'
import * as Images from '../../Assest/Images';
// const About=[
//     {
//         id:1,
//         line:(
//             <>
//             <div className='border-b text-green-400 w-10 border-4'>

//             </div>
//             </>
//         ),
//         name:"Who Are We",
//         description:""
//     }
// ]
const AboutFitst = () => {
  return (
    <div>
     <div className='relative'>
       <div className='bg-black h-[470px] w-[1270px]'>
        <img src={Images.Image_11}alt="" className='  h-[470px] w-[1270px] opacity-15'/>
        </div> 
        <div className='absolute top-20 text-white text-center item-center container'>
            <h1 className='text-5xl font-bold mb-4'>About Us</h1>
            <h2 className='text-xl font-bold mb-4'>Welcome to The Anchor Digital Agency</h2>
            <p className=''>With a focus on collaboration, creativity, and excellence, we strive to be the<br/> partner of choice for businesses looking to optimize their operations and drive<br/> growth.</p>
        </div>
        </div> 
        {/* <div>
            {About.map((item,index)=>(
                <div key={index}>
                    <div>
                        {item.line}
                    </div>
                    <div>
                        {item.name}
                    </div>
                </div>
            ))}
        </div> */}
    </div>
  )
}

export default AboutFitst
