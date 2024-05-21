import React from 'react'

const page = () => {
  return (
    <>
    <div className='mx-7'>
         <h1 className='text-center font-bold text-2xl'>Add Topic</h1>
        <form action="" method="POST" className='flex flex-col mt-4 gap-4'>
                <input type="text" placeholder='Topic Name' name="topicName" className='p-2 border border-gray-300 rounded text-black'/>

                <textarea name="description" id="" placeholder='Description' className='p-2 rounded col-span-12 row-span-8 text-black'></textarea>

                <button className='bg-green-700 font-bold px-5 py-3 rounded'>Add</button>
        </form>

        
    </div>
    

    </>
  )
}

export default page