import { Link } from '@inertiajs/react'
import React from 'react'

function NavBar() {
  return (
    <>
      <div className='flex justify-between items-center'>
            <div>
                  <h1 className='font-black text-4xl text-blue-600'>Blog</h1>
            </div>

            <div>
                  <ul className='flex text-blue-600'>
                        <li className='px-6'>features</li>
                        <li className='px-6'>pricing</li>
                        <li className='px-6'>contact</li>
                  </ul>
            </div>

            <div className='flex gap-x-4'>
                  <Link href='/create'>
                        <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Create</button>
                  </Link>
                  
            </div>
      </div>
    </>
  )
}

export default NavBar