const setup = require('../setup.json')
const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const userData = require("../Schema/UserData");

const server = express();
server.use(cors()); // Allow all origins by default
server.use(express.json());

mongoose.connect('mongodb://localhost:27017/local')
.then(async () => {
    console.log("Connected to MonogoDb")
    server.listen(setup.PORT,()=>console.log(`http://localhost:${setup.PORT}`));
    })
.catch((err)=>{
    console.log(err)
})

server.get('/',(req,res)=>{
    res.send('hi');
});

server.post("/signup",async (req,res)=>{
    const resivedData = req.body;
    const d = await userData.find({username:resivedData.username}); 
    console.log(d);
    
    if(d.length > 0){ 
        res.status(400).send(JSON.stringify({
            ok:false,
            payload:{
                message:"user name is already exist."
            }
        }));
        return;
    }

    const newUser = await userData.create(resivedData); 
    res.status(200).send(JSON.stringify({
        ok:true,
        payload:{
            message:"why you are checking paload.message that the ok is true you MF"
        }
    }));
});

server.post('/login',async(req,res) => {
    
    const {username , password} = req.body;
    const d = await userData.find({username: username});  
    if(d.length == 0){
        res.status(400).send(JSON.stringify({
            ok:false,
            payload:{
                message:"user name is does not exist."
            }
        }));
        return;
    }
    if(d[0].password != password){
       res.status(400).send(JSON.stringify({
            ok:false,
            payload:{
                message:"Incorrect Password"
            }
        }));
        return;  
    }
    res.status(200).send(JSON.stringify(
        {
            ok:true,
            payload:{
                message : "Login successfull",
                userData:d
            }
        }
    ))
})