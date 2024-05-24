"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaTrash } from 'react-icons/fa'

const DeleteBtn = ({id}:{id:any}) => {
    const router = useRouter()
    const RemoveTopic =async()=>{
        const confirmed = confirm("Are you Sure ?");

        if(confirmed){
           const res =  await fetch(`http://localhost:3000/api/topics?id=${id}`,{
                method:"DELETE",
            });
            if(res.ok){
                router.refresh()
            }

        }
    }
  return (
    <div>
            <FaTrash 
            onClick={RemoveTopic}
            color='red' className='cursor-pointer'/>

    </div>
  )
}

export default DeleteBtn