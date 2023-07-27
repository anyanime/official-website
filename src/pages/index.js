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
      <div className='absolute rounded-full bg-bh-yellow animate-spin w-10 h-30'>
        <div className='rounded-full bg-bh-lime animate-spin w-12 h-32' ></div>
      </div>
      <div className='relative flex h-6 w-6'>
        <div className='animate-ping absolute inline-flex w-full rounded-full bg-bh-lime top-10 opacity-75' ></div>
      </div>
      <div className='flex justify-center items-center gap-x-6 h-5/6 flex-col-reverse text-white p-6 font-semibold md:flex-row'>
        <div className='justify-start items-center p-6 lg:w-3/12'>
          <h1 className='font-medium text-5xl'>Hello!</h1>
          <h3 className='text-2xl'>I am Anyanime Benson</h3>
          <h2 className='text-2xl text-bh-lime lg:text-4xl uppercase font-bold mt-3'>Creative Writer Software Engineer</h2>
          <p className='mt-4 text-xl sm:text-xl'>I harness my creativity as a writer
            and knowledge of technology with practical ideas
            to bring about solutions to problem while maintaining 
            a fun and productive work environment.</p>
          <div>
          <Button type='internal' to='/about'>More About Me</Button> 
          <SocialMediaIcon />
          </div>
        </div>
        <div>
          <img className='h-full w-96 rounded-full justify-end' src={image} alt='Protrait of Anyanime Benson'/>
          <div className='relative rounded-full bg-bh-lime animate-spin w-10 h-30'>
            <div className='rounded-full bg-bh-red animate-spin w-12 h-32' ></div>
           </div>
        </div>
      </div>
      <Copyright />
    </div>
  )
}

//Gatsby Head API
export const Head = () => <title>Homepage</title>

export default index



