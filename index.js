const express = require('express');
const app = express();

const PORT = 8081;

app.get('/signup',(req,res)=>{
    const { username,email,password,dob} = req.query;
    if(!username){
        res.send({
            "error" : "Username cannot be empty"
        })
    }else if(!email){
        res.send({
            "error" : "Email cannot be empty"
        })
    }else if(password.length<8 || password.length>16){
        res.send({
            "error" : "Password length should be greater than 8 or less than or equal to 16"
        })
    }else{
        res.send({
            "success" : "User created successfully"
        })
    }
})

app.listen(PORT,()=>{console.log(`server is running on http://localhost:${PORT}`)})
