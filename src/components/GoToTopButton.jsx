import React, { useEffect } from 'react';
import {BsFillArrowUpCircleFill} from 'react-icons/bs';

const GoToTopButton = () => {
    const goToBtn =()=>{
       window.scrollTo({top:0,left:0, behavior: 'smooth'})
    }
     
  return (
    <div>
      <div className='go-to-top' onClick={goToBtn} style={{position:"fixed", right:"1.25rem", bottom:"1.25rem"}} >
        <BsFillArrowUpCircleFill fontSize={40} color='#00008B' />
      </div>
    </div>
  )
}

export default GoToTopButton
