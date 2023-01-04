const express = require("express")
const router = express.Router()

router.post("/getUserInfo",require("./getUserInfo"))

module.exports = router