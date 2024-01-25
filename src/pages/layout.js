import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const layout = ({children}) => {
  return (
    <div className='bg-black text-white md:h-screen lg:h-screen xl:h-screeen p-3'>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default layout
