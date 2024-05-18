import React from 'react'

function Cards({imgSrc}) {
  return (
    <>
      <div className='flex flex-col gap-2 p-3 border rounded-xl'>
            {/* image */}
            <div>
                  <img className='h-80 w-full' src={imgSrc} alt=""/>
            </div>

            {/* title */}
            <div>
                  <h1 className='text-xl font-black'>Title</h1>
            </div>

            {/* description */}
            <div>
                  <p>description</p>
            </div>

            {/* author */}
            <div className='flex justify-between items-center'>
                  <h2 className='text-xs'>Author</h2> 
                  <button className='bg-black text-white text-sm py-1 px-4 rounded-lg'>Details</button>
            </div>
      </div>
    </>
  )
}

export default Cards