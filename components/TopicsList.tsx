"use client"
import Link from 'next/link'
import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import DeleteBtn from './DeleteBtn'
import { useRouter } from 'next/navigation'

const getTopics = async()=>{
  const router = useRouter()

  try {
   const res =  await fetch("http://localhost:3000/api/topics",{
    cache:"no-store"
   })

   if(!res.ok){
    throw new Error("Failed to fetch topics")
   }
  return res.json();
  router.refresh()
    
  } catch (error) {
      console.log("Error Fetching topics",error);
      
  }
}

const TopicsList = async() => {
  const {topics} = await getTopics();
  return (
    <>
    {topics.map((topic:any)=>(
    <div key={topic.id} className=' flex justify-between items-center px-10 py-6 border mx-4 mt-8 rounded border-gray-400 dark:text-white '>
        <div className='flex flex-col gap-3 px-4 '>
            <h1 className='text-3xl font-bold'>{topic.title}</h1>
            <div>
            <p className='text-gray-400'>{topic.description}</p> 
            </div>
        </div>

        <div className='flex gap-6 text-2xl px-4'>
           <DeleteBtn id={topic._id}/>
            <Link href={`/edittopic/${topic._id}`}><FaEdit color='green'/></Link>
        </div>
    </div>
    ))}
    </>
  )
}

export default TopicsList