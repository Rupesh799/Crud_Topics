"use client";
import { headers } from "next/headers";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const router = useRouter()
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit =async(e:any)=>{
    e.preventDefault();

    if(!title || !description){
      alert("Please fill all the fields");
      return;
    }
    try {
      const res = await fetch('http://localhost:3000/api/topics',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({title, description})
      });

      if(res.ok){
        console.log("Response OK");
        router.push("/")
        
      }else{
        throw new Error("something went wrong")
      }
   
    } catch (error) {
      console.log(error);
      
    }

  }
  return (
    <>
      <div className="mx-7">
        <h1 className="text-center font-bold text-2xl">Add Topic</h1>
        <form onSubmit={handleSubmit} className="flex flex-col mt-4 gap-4">
          <input
          onChange={(e)=>setTitle(e.target.value)}
            value={title}
            type="text"
            placeholder="Topic Name"
            name="topicName"
            className="p-2 border border-gray-300 rounded text-black"
          />

          <textarea
            onChange={(e)=>setDescription(e.target.value)}
            value={description}
            placeholder="Description"
            className="p-2 rounded col-span-12 row-span-8 text-black"
          ></textarea>

          <button type="submit" className="bg-green-700 font-bold px-5 py-3 rounded">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default page;
