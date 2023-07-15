import React from 'react';
import Header from '../components/Header';
import image from '../images/profile.jpeg'


// This is the index file for the homepage

const index = () => {
  return (
    <div className='bg-black h-screen place-content-baseline'>
      <Header />
      <div className=' box-border flex justify-center flex-col-reverse text-white items-center gap-9 m-2 md:flex-row border-4 border-white'>
        <div className='justify-start items-center '>
          <h1 className='font-bold italic text-4xl'>Hello!</h1>
          <h3 className='text-2xl'>I am Anyanime Benson</h3>
          <h2 className='text-3xl uppercase font-bold mt-3'>Creative Writer <br /> Software Engineer</h2>
          <p className='mt-3 text-lg'>I harness my creativity as a writer <br/> 
            and knowledge of technology with practical ideas <br/> 
            to bring about solutions to problem while maintaining <br/> 
            a fun and productive work environment.</p>
          <div>
          {/* <Button />   */}
          </div>
        </div> 
        <div className='flex justify-center items-center border-4 border-white'>
          <img className='h-72 w-64 rounded-full' src={image} alt='Protrait of Anyanime Benson'/>
        </div>
      </div>
    </div>
  )
}

export default index



