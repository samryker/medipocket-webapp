const express  = require('express')
const app  = express()
const bodyParser = require("body-parser");
const port = 4000

app.use(bodyParser.json());
app.use("/api",require("./api"))

app.listen(port,()=>{
    console.log(`Server initiated at ${port}`)
})