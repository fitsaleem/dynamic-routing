"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const DynmicRoute = () => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(false);
    const router = useRouter();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if(inputValue === '') {
        setError(true);
      } else {
        setError(false);
        router.push(`form/${encodeURIComponent(inputValue)}`);
      }
    };
  
    return (
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit} className="w-1/2">
          {error && <p className="text-red-500">Please write something in form</p>}
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='create your dynamic page'
            className='border-2 border-gray-300 p-2 w-full text-black'
          />
          <button type="submit" className="mt-2 bg-blue-500 text-white p-2 w-full">Submit</button>
        </form>
      </div>
    );
}

export default DynmicRoute
