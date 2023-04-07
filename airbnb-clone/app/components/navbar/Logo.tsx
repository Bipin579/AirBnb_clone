"use client"
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
    const router = useRouter();
   
  return (
    <Image
      src="/images/logo.png"
      width={100}
          height={100}
          className='hidden md:block cursor-pointer'
      alt="logo"
      onClick={() => router.push('/')}
    />
  )
}

export default Logo