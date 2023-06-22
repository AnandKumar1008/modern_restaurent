import React from 'react';
import './Example.css';
import img1 from './Images/items1.jpeg'
import img2 from './Images/items2.jpeg'
import img3 from './Images/items3.jpeg'
import { useState } from 'react';
import { useEffect } from 'react';



const Example = () => {
  const [item,setItem]=useState();
  useEffect(()=>{
    apiCall();
  },[])
  const apiCall=async()=>{
    try{
      const res=await fetch('https://api.unsplash.com/search/photos?query=food&client_id=vS_aAcrL5wZ8CSF7oDo-Btwhh-AxocVNBqAbAn12DKs');
      const data=await res.json();
      console.log(data);
      setItem(data.results);
    }
    catch(error){
      console.log(error);
    }
  }
  return (
    <div >
      <h1>Hare Krishna</h1>
      {item?.map((item,i)=>(
        <div key={i}>

<img  src={item.urls.full} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Example;
