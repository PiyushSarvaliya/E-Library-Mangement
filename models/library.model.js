const mongoose = require("mongoose")
const { boolean } = require("webidl-conversions")

const bookschema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true
    },
    genre : {
        type : String,
        required : true
    },
    availablity : {
        type : Boolean,
        default : true
    },
    borrowedby : {
        type : mongoose.Schema.ObjectId , ref : "Libraryuser",
        default : null
    }
} , {timestamps : true})



const Book = mongoose.model("books" , bookschema)


module.exports = Book