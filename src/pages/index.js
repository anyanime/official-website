import React from 'react';
import Header from '../components/Header';
import image from '../images/profile.jpeg';
import SocialMediaIcon from '../components/SocialMediaIcons';
import Button from '../components/Button';
import Copyright from '../components/Copyright';


// This is the index file for the homepage

const index = () => {
  return (
    <div className='bg-black h-full sm:h-screen md:h-screen lg:h-screen xl:h-screen p-3'>
      <Header />  
      <div className='flex justify-evenly items-center h-5/6 flex-col-reverse text-white p-6 font-semibold sm:flex-col md:flex-row'>
        <div className='mt-6 md:mt-2 md:w-4/12'>
          <h1 className='text-bh-teal font-hello text-6xl md:text-9xl motion-safe:animate-bounce brightness-125'>Hello!</h1>
          <h3 className='text-pearl text-xl md:text-2xl'>I am Anyanime Benson</h3>
          <h3 className='text-xl text-bh-lime md:text-3xl uppercase font-extrabold mt-3 brightness-125'>Creative Writer <br/> Software Engineer</h3>
          <p className='mt-2 text-xl text-bh-gold'>I harness my creativity as a writer
            and knowledge of technology with practical ideas
            to bring about solutions to problem while maintaining 
            a fun and productive work environment.</p>
          <div>
          <Button type='internal' to='/about'>More About Me</Button> 
          </div>
        </div>
        <div>
          <img className='h-full w-96 rounded-full ' src={image} alt='Protrait of Anyanime Benson'/>
        </div>
      </div>
      <footer className='flex justify-center flex-col gap-2'>
      <SocialMediaIcon />
      <Copyright />
      </footer>
    </div>
  )
}

//Gatsby Head API
export const Head = () => <title>Homepage</title>

export default index



