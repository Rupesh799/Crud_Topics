"use client"


import Link from 'next/link'
import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const TopicsList = () => {
  return (
    <>
    <div className=' flex justify-between items-center px-10 py-6 border mx-4 mt-8 rounded border-gray-400 '>
        <div className='flex flex-col gap-3 px-4 '>
            <h1 className='text-3xl font-bold'>Title</h1>
            <div>
            <p className='text-gray-400'>description</p> 
            </div>
        </div>

        <div className='flex gap-6 text-2xl px-4'>
            <FaTrash color='red'/>
            <Link href="/edittopic/1"><FaEdit color='blue'/></Link>
        </div>
    </div>
    
    </>
  )
}

export default TopicsList