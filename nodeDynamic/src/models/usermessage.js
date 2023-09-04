const { error } = require("jquery")
const mongoose = require("mongoose")
// install validator to validate d/f data given by user
const validator = require("validator")

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required : true,
        minLength : 3 
    },
    email:{
        type: String,
        required : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email id !!")
            }
        }   
    },
    message:{
        type: String,
        maxLength :50
    },
    date:{
        type: Date,
        default: Date.now
    }
})

//we need a collection now  NOTE: U in User should be capital 

const User = mongoose.model("User", userSchema)

module.exports = User 
