const express  = require('express')
const app  = express()
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use("/api",require("./api"))

app.listen(4000,()=>{
    console.log("Server initiated at 4000")
})