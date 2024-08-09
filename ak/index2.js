const fs = require("fs")
const express = require("express")


console.log("Hello World")

const data = fs.readFileSync('./b.txt','UTF-8')

console.log(data)