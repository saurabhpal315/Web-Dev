// write basic express boiler plate code 
// with express.json() middleware


const express = require('express');
const { createTodo ,updateTodo} = require('./types');
const { todo } = require('./db');
const app=express();
const cors=require('cors');
app.use(express.json());
app.use(cors());


// body{
    // title:string:
    // description:string:
    
// }
app.post('/todo', async function(req, res){
   const createPayload=req.body;
   const parsePayload=createTodo.safeParse(createPayload);
   if(!parsePayload.success){
    res.status(411).json({
        msg:"You sent wrong inputs"
    });
   }  
      //   put it in mongoDb
     await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
     })
     res.status(201).json({
        msg:"Todo created successfully"
     });
   
   


});
app.get('/todos', async function(req, res){
  const todos=await todo.find({});    /*<<<<<return promise*/
    res.json({
        todos
    })
});

app.put('/completed', async function(req, res){
   const updatePayload=req.body;
   const parsePayload=updateTodo.safeParse(updatePayload);
   if(!parsePayload.success){
    res.status(411).json({
        msg:"You sent wrong inputs"
    });
   return;
    }
   await todo.updateOne({
        _id:req.body.id,
    },{
        completed:true
    })
    res.json({
    msg:"Todo marked as completed"
    });
});

app.listen(3000);