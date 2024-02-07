import React from 'react';
import * as Images from '../../Assest/Images';


const Leadership = [
  
  {
    id: 1,
    img: Images.Image_4,
    name: 'Shishir Sharma',
    work: 'Junior Web Developer',
  },
  {
    id: 2,
    img: Images.Image_4,
    name: 'Another Name',
    work: 'Another Position',
  },
  {
    id: 3,
    img: Images.Image_4,
    name: 'Yet Another Name',
    work: 'Yet Another Position',
  },
  {
    id: 4,
    img: Images.Image_4,
    name: 'Yet Another Name',
    work: 'Yet Another Position',
  },
  {
    id: 5,
    img: Images.Image_4,
    name: 'Yet Another Name',
    work: 'Yet Another Position',
  },
];

const Fifthpage = () => {

  return (
    <div>
      <div className='text-center pt-20 pb-20 bg-lightgray'>
        <h1 className='text-4xl font-bold'>Meet Our Leadership</h1>
        <p>
          We believe that strong leadership is the foundation for success. Meet
          the individuals who bring their unique perspectives and expertise to
          guide our company towards excellence.
        </p>
      </div>
     
     
      <div className='flex gap-4'>
        {Leadership.map((item) => (
      
          <div key={item.id}>
            <img src={item.img} alt={item.name} />
            <div>{item.name}</div>
            <div>{item.work}</div>
          </div>
    
        ))}
      </div>
   
    
    </div>
  );
};

export default Fifthpage;


