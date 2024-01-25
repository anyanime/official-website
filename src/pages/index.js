import React from 'react';
import image from '../images/profile.jpeg';
import Button from '../components/Button';
import Layout from './layout';

// This is the index file for the homepage

const index = () => {
  return (
    <Layout>
      <div className='flex justify-evenly items-center flex-col-reverse p-6 font-semibold md:flex-row'>
        <div className='mt-6 md:mt-2 md:w-4/12'>
          <h1 className='text-bh-teal font-hello text-5xl md:text-7xl xl:text-8xl motion-safe:animate-bounce brightness-125'>Hello!</h1>
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
    </Layout>
  )
}

//Gatsby Head API
export const Head = () => <title>Homepage</title>

export default index;



