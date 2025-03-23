

const express = require("express")
const os = require("os")
export const app = express()


app.get("/",function(req,res){
    let n = 0
    for(let i = 0; i<9999999999;i++){
        n = n+i
    }
    res.status(200).send(`this is your ${n}code ${process.pid} fsano`)
})

app.get('/os',function(req,res){
    res.send(os.hostname())
})