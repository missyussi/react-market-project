import React from 'react'
import Data from './data';

// khud card bnaya hehe
function Acard() {
  return (
    <div className='flex m-4 text-center'>
      {
      Data.map((e,id)=>{
        return(
<div key={id} id='div1' className='mx-4 h-60  w-60 p-3'>
        <h1 className=" text-pink-600 font-extrabold">{e.username}</h1>
        <p className='my-2'>{e.description} </p>
       <hr />
        <button className='button-74' type="button">like me</button>
        </div>
         
        )
      })
}
</div>
  )
}
export default Acard;
