const mongoose = require('mongoose');
/*
Todo{
    title:string
    description:string
    completed:boolean
 }
*/
mongoose.connect("mongodb+srv://admin:1234Asdf@cluster0.lo0hyox.mongodb.net/myTodos");
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo=mongoose.model('todos',todoSchema);
module.exports={
    todo:todo
}