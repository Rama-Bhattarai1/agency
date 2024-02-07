import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaRegObjectGroup } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";

const SecondData=[
    {
        id:1,
        icon:<FaRegEdit/>,
        name:"Digital Product Design",
       desceription:(
<>
Our C reative Thinkers and Designers<br/> create stunning Digital Product Designs,<br/> Experiences that capture your brand's <br/>essence and captivate your Market Value.
</>
       ),
          

    },
    {
      id:2,
      icon:< FaRegObjectGroup/>,
      name:"Digital Development",
     desceription:(
<>
Creating web and mobile applications<br/>  that meet user needs, boost business<br/>  growth, and leverage emerging<br/>  technologies, such as AI, block-chain,<br/>  and cloud computing.
</>
     ),
        

  },
  {
    id:3,
    icon:<IoPaperPlaneOutline/>,
    name:"Productive Marketing",
   desceription:(
<>
Productive Marketing involves<br/>  developing and implementing effective<br/>  strategies to increase sales, customer<br/>  engagement, and brand awareness for<br/>  a company's products.
</>
   ),
},

{
  id:4,
  icon:<FaRegLightbulb/>,
  name:"Startup Design & Strategy",
 desceription:(
<>
Startup Design & Strategy is a field<br/>  focused on developing innovative ideas<br/>  and executing plans to achieve business<br/>  goals efficiently.
</>
 ),
},
{
  id:5,
  icon:< FaRegCreditCard/>,
  name:"TechB PartnerShip",
 desceription:(
<>
TechB Partnership is a technology<br/> -focused collaboration between<br/>  businesses, working to drive innovation <br/> and growth in the industry.
 </>
 ),
},
{
id:6,
icon:<FaRegUserCircle/>,
name:"Technology Consultation",
desceription:(
<>
Professional advice and support on <br/> technology-related matters for<br/>  individuals and organizations seeking to<br/>  optimize their technology use.
</>
),
},
];
const second = () => {
  return (
    <div className='bg-lightgray pb-10 container'>
      <div className='text-center pt-32 pb-32  '>
      <h1 className='text-6xl font-bold'>How can we help you?</h1>
      <p>“Where Vision Meets Growth” </p>
      </div>
      <div className='grid grid-cols-3  gap-6'>
        {SecondData.map((item,index)=>(
          <div key={index}>
<div className='bg-white w-[340px] h-80 p-6 '>
  <div className='text-3xl text-darkgreen mb-2'>{item.icon}</div>
  <div className='text-xl text-black font-bold '>{item.name}</div>
  <div>{item.desceription}</div>
  </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default second
