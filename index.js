const mongoose = require("mongoose")
const Users = require("./model")
const Data = require("./InsertData/data")

// // console.log(Data)
// // server

const express = require("express")

const app = express()
app.use(express.json())
mongoose.connect("mongodb+srv://kamal:root@cluster0.p4kiu.mongodb.net/DummyData?retryWrites=true&w=majority", (err, res) => {

// Users.create(Data,(err,res)=>err?console.log(err):console.log("Added data"))
    
// Users.deleteMany({},(err,res)=>err?console.log(err):console.log(res))

    

})
app.get("/", (req, res) => {
// Users.find({}, (err, data) => {
//         // console.log(data);
//         res.send(data)
//     })
    res.send("Kamal")
})

app.post("/" ,(req,res)=>{
// console.log(req.body)
Users.insertMany(req.body,(err,result)=>{
err?console.log(err):console.log("Added");
})
console.log(req.body)
res.json(req.body)
})



app.listen(5000,console.log("Server start on port 5000"))