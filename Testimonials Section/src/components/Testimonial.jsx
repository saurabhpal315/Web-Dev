import React, { useState } from 'react'
import Card from './Card'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const Testimonial = (props) => {
    let reviews=props.reviwes
    const[index,setIndex]=useState(0);
    function leftClickHandler(){
          if(index-1<0){
            setIndex(reviews.length-1)
          }
          else{
            setIndex(index-1);
          }
    }
    function rightClickHandler(){
        if(index+1>=reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }
    function surpizeMeClickHandler(){
        setIndex(Math.floor(Math.random()*reviews.length));

    }
  return (
    <div className='rounded-md w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl'>
    <Card review={reviews[index]}></Card>
    <div className=" flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto">
        <button onClick={leftClickHandler} className=" cursor-pointer hover:text-violet-500">
          <FiChevronLeft />
        </button>
        <button onClick={rightClickHandler} className=" cursor-pointer hover:text-violet-500">
          <FiChevronRight />
        </button>
      </div>
      <div className=' mt-6'>
        <button onClick={surpizeMeClickHandler} className=" bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg">
          Surpize Me
        </button>
      </div>
    </div>
  )
}
export default Testimonial