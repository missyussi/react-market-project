import React from 'react'

function aCard() {
  return (
    <div className='flex m-4 text-center'>
      {
      [1,2,3,4,5].map((e)=>{
        return(
<div key={e} id='div1' className='mx-4 h-72  w-64'>
        <h1 className=" text-pink-600 font-extrabold">username</h1>
        <p className='my-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim temporibus facere explicabo sit labore dolores neque cupiditate esse dolor fuga tempora vero impedit, accusantium adipisci a voluptas qui sequi voluptatibus!</p>
       <hr />
        <button className='button-74' type="button">like me</button>
        </div>
         
        )
      })
}
</div>
  )
}
export default aCard;
