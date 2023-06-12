 import React, { useState } from 'react';
 import './TopImgSlider.css';
 import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs';
 import '../../../../index.css';

 const TopImgSlider = ({data}) => {
    const [slide,setSlide] = useState(0);

    const nextSlide =()=>{
         setSlide(slide=== data.length-1 ? 0:slide+1);
    }
    const prevSlide=()=>{
        setSlide(slide===0 ? data.length-1: slide-1)
        //   setSlide(slide-1);
    }

   return (
     <div className='carousel'>
     <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide}/>
       {
        data.map((item,i)=>{
            return <img src={item.src} alt={item.alt} key={i} className={slide===i ? "slide" : "slide slide-hidden"} />
        })
       }
       <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>
       {/* <span className='indicators'>
        {data.map((_,i)=>{
             return <button key={i} onClick={null} className={slide===i ? "indicator" : "indicator-inactive"}></button>
        })}
       </span> */}
     </div>
   )
 }
 
 export default TopImgSlider
 