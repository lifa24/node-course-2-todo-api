//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

var obj= new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connect to MongoDB server');

//   db.collection('Todos').findOneAndUpdate({
//     _id:new ObjectID("59e0ca0cc363df428995d847")},
// {$set:{
//   completed:true}
// },{
//   returnOriginal:false
// }).then((result)=>{
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id:new ObjectID("59dffe36c9027f01bc22e7b6")},
{$set:{
name:'Faxiang'
},
$inc:{
  age:1
}
},{
returnOriginal:false
}).then((result)=>{
console.log(result);
});

  //db.close();
});
