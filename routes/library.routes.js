const {Router} = require("express")
const { bookcreate, allbook, singlebook, bookupdate, bookdelete, bookborrow, bookreturn } = require("../controllers/library.controller")
const { Auth } = require("../middlewares/auth")

const bookRoute = Router()

bookRoute.post("/create" , Auth , bookcreate)
bookRoute.get("/allbooks" , allbook)
bookRoute.get("/singlebook/:id" , singlebook)
bookRoute.patch("/update/:id" , bookupdate)
bookRoute.delete("/delete/:id" , bookdelete)
bookRoute.put("/borrow/:id" , Auth ,bookborrow)
bookRoute.put("/return/:id" , Auth , bookreturn)
module.exports = bookRoute