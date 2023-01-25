const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.send('you have reached the api')
})
router.post("/getUserInfo",require("./getUserInfo"))

module.exports = router