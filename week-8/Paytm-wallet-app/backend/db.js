
const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const { number } = require("zod");
mongoose.connect(process.env.DB_URL)

const userShema = new mongoose.Schema({
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
    },
})

const accountSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    balance : {
        type : Number,
        required : true
    }
})

const User = mongoose.model("User", userShema)
const Account = mongoose.model("Account", accountSchema)

module.exports = {
    User,
    Account
}