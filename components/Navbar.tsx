import Link from 'next/link'
import React from 'react'
import { BiMoon } from 'react-icons/bi'
import { CgDarkMode } from 'react-icons/cg'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-8 py-8 h-12  mt-10 dark:text-white '>
      
    
    <Link href="/" className='text-3xl font-bold'>TASKIFY</Link>
        <ThemeToggle/>
        <Link href="/addtopic"><button className='px-5 py-3 rounded font-bold bg-green-700'>Add Task</button></Link>
    
    </div>
  )
}

export default Navbar