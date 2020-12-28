const { request } = require('express');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mockUserData= [
    {name:'ajay'},
    {name:'anjali'},
    {name:'mark'}
]

app.get('/users',function(req,res){
    
   res.json({
       success:true,
       message:'successfully got users. Nice!',
       users: mockUserData
   })
})

app.get('/users/:id',function(req,res){
    console.log(req.params.id)
   res.json({
       success:true,
       message:'successfully got users. Nice!',
       users: req.params.id
   })
})

app.post('/login',function(req,res){
    // Typically passwords are encrypted using something like bcrypt before sending to database
        const username=req.body.username;
        const password=req.body.password;
// This should come from the database
        const mockUsername="billyTheKid";
        const mockPassword="superSecret";

    if(username===mockUsername && password === mockPassword)
    {
        res.json({
            success:true,
            message:'password and username match',
            token: 'encrypted token goes here'
        })
    } else {
        res.json({
            success: false,
            message:'password and username do not match',
        })
    }
})

app.listen(8000,function(){
    console.log("server is going to run you can access it on port http://localhost:8000....")
  });