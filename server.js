const express = require('express');
const app = express();

const mockData= [{name:'ajay'},{name:'anjali'}]
app.gey('/users',function(req,res){
   res.json({
       success:true,
       message:'successfully got users. Nice!',
       users: mokeUserData
   })
})

app.listen(8000,function(){
    console.log("server is going to run you can access it on port http://localhost:8000....")
  });