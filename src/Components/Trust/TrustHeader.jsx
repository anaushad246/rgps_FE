import React from 'react';
import TrustMenu from './TrustMenu';

function TrustHeader() {
  return (
    <header className=' bg-gradient-to-r from-[#2E865F] to-[#1E5128] shadow-lg'>
    <div className='flex  gap-4 md:flex-row items-center justify-evenly py-4 p-1'>
      {/* Logo */}
      <div className='flex items-center'>
          <img
            src="/trustLogo.png"
            alt="Trust Logo"
            className='w-16 h-16 rounded-full'
          />
        </div>
      {/* Title */}
      {/* <div className='text-center md:text-left  p-4 border border-gray-500 rounded-md bg-white bg-opacity-20'>
        <h1 className='lg:text-2xl text-md font-bold text-white flex flex-col items-center'>
          Tahir Hussain Educational 
          <span className='block'>and </span>
          Welfare Trust
        </h1>
      </div> */}
      {/* Navigation Menu */}
      <div>
        <TrustMenu />
      </div>
    </div>
  </header>
  );
}

export default TrustHeader;