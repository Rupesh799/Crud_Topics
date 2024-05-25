import EditTopicForm from '@/components/EditTopicForm'
import React from 'react'

const getTopicById = async(id:any)=>{
  try {
    const res = await fetch (`http://localhost:3000/api/topics/${id}`,{
      cache:"no-store",
    });

    if(!res.ok){
      throw new Error("Failed to fetch topi")
    }

    return res.json();
  } catch (error) {
      console.log(error);
      
  }
}

const EditTopicPage = async({params}:{params:any}) => {
  const {id} = params;
  const {topic} = await getTopicById(id);
  const {title, description} = topic;
  console.log("Edit data", topic);
  
  console.log("id is", id);
  
  return (
    <>
    <EditTopicForm id={id} title={title} description={description}/>
    </>
  )
}

export default EditTopicPage