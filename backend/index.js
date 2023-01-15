const express  = require('express')
const app  = express()
const http = require("http");

const server = http.Server(app);

const bodyParser = require("body-parser");
const port = 4000

app.use(bodyParser.json());
app.get("/",(req,res)=>{
    res.json("you have reached the server")
})
app.use("/api",require("./api"))

server.listen(port,()=>{
    console.log(`Server initiated at ${port}`)
})