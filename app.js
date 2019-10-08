const express = require("express")
const app = express()
app.use(express.static("/public"))

console.log("Hiii we are Jurgen and Jack")

app.listen(3000, ()=> {
    console.log("I'm listening!")
})