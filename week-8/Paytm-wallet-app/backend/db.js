
const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URL)

const userShema = mongoose.Schema({
    firstName : {
        type : String,
        required : true,
        trim : true,
        maxLength : 30
    },
    lastName : {
        type : String,
        required : true,
        trim : true,
        maxLength : 30
    },
    username : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true,
        minLength : 3,
        maxLength : 30
    },
    password : {
        type : String,
        required : true,
        minLength : 6,
    }
})

const User = mongoose.model("User", userShema)

module.exports = {
    User
}