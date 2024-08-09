const fs = require("fs")
const express = require("express")

fs.writeFileSync('./b.txt','Hello World',(err) => {
    console.log("hello world")
})