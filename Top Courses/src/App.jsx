import React, { useEffect, useState } from 'react'
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Cards from "./components/Cards"
import Filter from "./components/Filter"
import Spinner from "./components/Spinner"
import { apiUrl, filterData } from './data'
import { toast } from 'react-toastify'

function App() {
  const[courses,setCourses] =useState({});
  const[loading,setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title)
  async function fetchData(){
    setLoading(true);
    try{
      const respose=await fetch(apiUrl);
      const output=await respose.json();
      setCourses(output.data);
    }catch(e){
     toast.error("Network error:");
    }
    setLoading(false);
  }
  useEffect(()=>{
    fetchData();
  },[]);
  return (
    <div className=' flex flex-col min-h-screen bg-bgDark2'>
     <div><Navbar/></div>
     <div className=' bg-bgDark2'>
     <div><Filter filterData={filterData} category={category} setCategory={setCategory}/></div>
     <div className=' w-11/12 flex-wrap max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh]'>

      {
        loading?(<Spinner/>):(<Cards courses={courses} category={category}/>)
      }
     </div>
    </div>
    </div>
    
  )
}

export default App
