'use client'
import React from 'react'
import { useTheme } from 'next-themes';

export default function ModeToggle() {
   const { setTheme } = useTheme();
  return (
    <div className='flex gap-2 '>
      <button className='px-2 py-1 rounded ' onClick={() => setTheme('light')}>Light Mode</button>
      <button className='px-2 py-1 rounded ' onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  )
}
