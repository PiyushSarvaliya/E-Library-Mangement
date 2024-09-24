const express = require("express")
const connect = require("./config/db")
const userRoute = require("./routes/user.routes")
const cookie = require("cookie-parser")
const bookRoute = require("./routes/library.routes")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true }))
require("dotenv").config()
app.use(cookie())

app.use("/user" , userRoute)
app.use("/book" , bookRoute)
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "something went wrong" } = err;
    console.log(message);
    res.status(statusCode).send(message);
});

app.listen(process.env.PORT , ()=>{
    connect()
    console.log(`port is strat ${process.env.PORT}`)
})



