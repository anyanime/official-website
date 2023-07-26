import React from 'react';
import Header from '../components/Header';
import image from '../images/profile.jpeg';
import SocialMediaIcon from '../components/SocialMediaIcons';
import Button from '../components/Button';
import Copyright from '../components/Copyright';


// This is the index file for the homepage

const index = () => {
  return (
    <div className='bg-black h-full max-sm-auto md:h-screen lg:h-screen'>
      <Header />
      <div className='flex justify-center items-center h-5/6 flex-col-reverse gap-9 text-white p-7 font-semibold md:flex-row'>
        <div className='justify-start items-center p-6 lg:w-3/12'>
          <h1 className='font-medium text-5xl'>Hello!</h1>
          <h3 className='text-2xl'>I am Anyanime Benson</h3>
          <h2 className='text-2xl text-bh-lime lg:text-4xl uppercase font-bold mt-3'>Creative Writer Software Engineer</h2>
          <p className='mt-4 text-xl sm:text-xl'>I harness my creativity as a writer
            and knowledge of technology with practical ideas
            to bring about solutions to problem while maintaining 
            a fun and productive work environment.</p>
          <div>
          <Button />  
          <SocialMediaIcon />
          </div>
        </div>
        <div className='flex justify-center mx-10'>
          <img className='h-96 rounded-lg ' src={image} alt='Protrait of Anyanime Benson'/>
        </div>
      </div>
      <Copyright />
    </div>
  )
}

//Gatsby Head API
export const Head = () => <title>Homepage</title>

export default index



