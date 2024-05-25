"use client"
import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { BiMoon } from 'react-icons/bi'
import {BsSunFill} from 'react-icons/bs'

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(true)

    useEffect(()=>{
        const theme = localStorage.getItem("theme");
        if(theme === 'dark') setDarkMode(true)
    },[])

    useEffect(()=>{
        if(darkMode){
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark")
        }else{
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    },[darkMode])
  return (
    <div className='relative dark:bg-gray-900 w-16 h-8 flex items-center rounded-full bg-teal-400 cursor-pointer p-1'
    onClick={()=>setDarkMode(!darkMode)}
    >

        <BiMoon className='text-white' size={18}/>
        <div className='w-6 h-6 absolute bg-white  rounded-full transform transition-transform duration-300'
        style={darkMode? {left:"2px"}:{right:"2px"}}
        >
        </div>
        <BsSunFill className='ml-auto text-yellow-600' size={18}/>
    </div>
  )
}

export default ThemeToggle