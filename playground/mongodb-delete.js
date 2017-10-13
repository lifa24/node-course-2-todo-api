//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

var obj= new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connect to MongoDB server');

  // db.collection('Users').deleteMany({name:'Faxiang'})
  // .then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({ _id : new ObjectID("59dffea83608963170032bf4")})
  .then((result)=>{
    console.log(result);
  });

  // db.collection('Todos').deleteOne({text:'Eat lunch'})
  // .then((result)=>{
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({completed:false})
  // .then((result)=>{
  //    console.log(result);
  //  });


  //db.close();
});
