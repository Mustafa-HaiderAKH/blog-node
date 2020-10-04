const express = require("express")
const app = express()
const { notFound } = require("./Middleware")
const route = require("./routes")



//midlleeware
app.use(express.json());

//Route handler
app.use("/", route)

//404
app.use(notFound)


//listen
app.listen(5000, () => console.log("opne in port 5000"))