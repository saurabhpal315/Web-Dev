import { useState } from "react";

// react query
export function CreateTodo() {
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");


  return (
    <div>
    <input id="title" style={{padding:10,margin:10}}
     type="text" 
     placeholder="Title" 
     onChange={
      function(e){
      setTitle(e.target.value);
      }
      }/><br/>
    <input id="desc" style={{padding:10,margin:10}} 
    type="text" placeholder="Description" 
     onChange={
      function(e){
        setDescription(e.target.value);
        }
        }/><br/>
    <button onClick={()=>{
      fetch("http://localhost:3000/todo",{
        method:"POST",
        body:JSON.stringify({
          title:title,
          description:description
          }),
           headers:{
            "Content-type":"application/json"
           }
            })
      .then(async function(res){
          const json=await res.json();
          alert("Todo Added!");
      })
    }} style={{padding:10,margin:10}}>Add A Todo</button>
    </div>
  )
}
