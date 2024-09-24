const Book = require("../models/library.model");
const wrapAsyc = require("../utils/wrapAsyc");

const bookcreate = wrapAsyc(async(req , res) => {
    let {title , author , availablity , genre} = req.body

    let data = await Book.create(req.body)
    res.status(200).json({msg : "Book is created" , data})
})

const allbook = wrapAsyc(async(req , res) =>{
    let data = await Book.find()
    res.status(200).json({allbook : data})
})

const singlebook = wrapAsyc(async(req , res) =>{
    let {id} = req.params

    let data = await Book.findById(id)
    res.status(200).json({singlebook : data})
})

const bookupdate = wrapAsyc(async(req , res)=>{
    let {id} = req.params

    let data = await Book.findByIdAndUpdate(id , req.body , {new : true})
    res.status(200).json({msg : "updated successfully" , data})
})

const bookdelete = wrapAsyc(async(req , res) =>{
    let {id} = req.params

    let data = await Book.findByIdAndDelete(id)
    res.status(200).json({msg : "data is successfully deleted" , data})
})


const bookborrow = wrapAsyc(async(req , res)=>{
    let {id} = req.params

    const data = await Book.findById(id)
    if(!data.availablity) return res.status(400).json({msg : "Book is not available"})

    data.availablity = false
    data.borrowedby = req.body.borrowedby
    await data.save()
    res.status(500).json({msg : "book is successfull borrowed" , data}) 
})

const bookreturn = wrapAsyc(async(req , res) =>{
    let {id} = req.params

    const data = await Book.findById(id)
    if(data.borrowedby.toString() !==  req.body.borrowedby) return res.status(400).json({msg :"not authorized"})

    data.availablity = true
    data.borrowedby = null 
    await data.save()
    res.status(200).json({msg : "Book is successfully return" , data})
})


module.exports = {bookcreate , allbook , singlebook , bookupdate , bookdelete , bookborrow , bookreturn}