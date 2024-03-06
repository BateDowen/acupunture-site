import React from 'react'

const LoaderModal = () => {
  return (
    <div className='bg-[#141414] flex justify-center items-center opacity-75 vis pt-[100px] h-screen w-screen fixed'>
      <div className=' w-20 h-20 border-8 border-white border-t-cyan-800 rounded-full animate-spin'></div>
    </div>
  )
}

export default LoaderModal
