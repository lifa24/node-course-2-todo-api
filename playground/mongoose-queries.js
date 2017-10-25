const {ObjectID}=require('mongodb');

const{mongoose}=require('./../server/db/mongoose');
const{Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/user');


// var id='59f097b8c03ae54504d15227s';
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid!');
// }

// Todo.find({
//   _id:id
// }).then((todos)=>{
//   console.log('Todos',todos);
// });
// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('ID not found!');
//   }
//   console.log('Todo by id',todo);
// }).catch((e)=>console.log(e));

User.findById('59e15c449d584e53f41ec413').then((user)=>{
  if(!user){
    return console.log('Unable to find user!');
  }
  console.log(JSON.stringify(user,undefined,2))
},(e)=>{
console.log(e);
});
