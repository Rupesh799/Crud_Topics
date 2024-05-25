"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditTopicForm = ({
  id,
  title,
  description,
}: {
  id: any;
  title: any;
  description: any;
}) => {
  const router = useRouter()
  // storing the title and description in the state
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const handleSubmit = async(e:any)=>{
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
        method: "PUT",
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify({newTitle, newDescription})
      
      });
      if(!res.ok){
        throw new Error("Something went wrong");
      }
      
      router.push("/")
      router.refresh()

    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <>
      <div className="mx-7 dark:text-white">
        <h1 className="text-center font-bold text-2xl">Edit Topic</h1>
        <form onSubmit={handleSubmit} className="flex flex-col mt-4 gap-4">
          <input
            onChange={e=>setNewTitle(e.target.value)}
            value={newTitle}
            type="text"
            placeholder="Topic Name"
            name="topicName"
            className="p-2 border border-gray-300 rounded text-black"
          />

          <textarea
          onChange={e=>setNewDescription(e.target.value)}
          value={newDescription}
            name="description"
            id=""
            placeholder="Description"
            className="p-2 rounded col-span-12 row-span-8 text-black border-2"
          ></textarea>

          <button type="submit" className="bg-green-700 font-bold px-5 py-3 rounded">
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default EditTopicForm;
