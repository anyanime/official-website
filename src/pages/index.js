import React from 'react';
import Header from '../components/Header';
import image from '../images/profile.jpeg';
import SocialMediaIcon from '../components/SocialMediaIcons';
import Button from '../components/Button';


// This is the index file for the homepage

const index = () => {
  return (
    <div className='bg-black h-full max-sm-auto md:h-screen lg:h-screen'>
      <Header />
      <SocialMediaIcon />
      <div className='flex justify-center items-center h-5/6 flex-col-reverse gap-9 text-white p-7 md:flex-row'>
        <div className='justify-start items-center p-6 leading-10'>
          <h1 className='font-medium text-5xl'>Hello!</h1>
          <h3 className='text-2xl'>I am Anyanime Benson</h3>
          <h2 className='lg:text-3xl xl:text-4xl uppercase font-bold mt-4'>Creative Writer <br /> Software Engineer</h2>
          <p className='mt-4 text-xl'>I harness my creativity as a writer <br/> 
            and knowledge of technology with practical ideas <br/> 
            to bring about solutions to problem while maintaining <br/> 
            a fun and productive work environment.</p>
          <div>
          <Button />  
          </div>
        </div> 
        {/* className='flex justify-center items-center border-4 border-white' */}
        <div className='flex justify-center mx-10'>
          <img className='h-96 rounded-lg ' src={image} alt='Protrait of Anyanime Benson'/>
        </div>
      </div>
    </div>
  )
}

export default index



