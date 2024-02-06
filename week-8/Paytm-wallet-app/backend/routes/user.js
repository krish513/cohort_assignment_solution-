
const express = require("express");
const router = express.Router();
const z = require("zod");
const { User, Account } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../middleware");

// zod schema for user signup
const userShema = z.object({
    firstName : z.string(),
    lastName : z.string(),
    username : z.string().email(),
    password : z.string() 
})

// zod schema for user sigin
const signinSchema = z.object({
    username : z.string().email(),
    password : z.string()
})

// signup
router.post("/signup", async(req,res)=>{
    const signUpData = req.body;
    const {success} = userShema.safeParse(signUpData);

    if(!success){
        return res.status(411).json({
            msg : "Incorrect signup details"
        })
    }
    const existingUser = await User.findOne({
        username : signUpData.username
    })
    if(existingUser){
        return res.status(411).json({
            msg : "User already exist"
        })
    }else{
        const user = await User.create(signUpData);
      
        // creat account
        const userId = user._id;
        await Account.create({
            userId,
            balance : 1 + Math.random() * 10000
        })

        res.status(200).json({
            msg: "User created successfulyy",
        })
    }
})

// signin
router.post("/signin", async(req,res)=>{
    const signinBody = req.body;
    const {success} = signinSchema.safeParse(signinBody);
    if(!success){
        return res.status(411).json({
            msg: "incorrect inpur"
        })
    }
    const user = await User.findOne({
        username : signinBody.username,
        password : signinBody.password
    })
    if(!user){
        return res.status(411).json({
            msg : "User not found"
        })
    }else{
        const userId = user._id
        const token = jwt.sign({userId},JWT_SECRET) // userId args must be sent as an object
        res.json({
            firstName : user.firstName,
            msg : "Login Successfull",
            token
        })
    }

})

// update user informantion (firstName/lasName/password)

const updateBody = z.object({
    firstName : z.string().optional(),
    lastName : z.string().optional(),
    password : z.string().optional(),
})

router.put("/", authMiddleware, async(req,res)=>{
    const body = req.body;
    console.log(req.userId)
    const {success} = updateBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({msg : "wrong input while updating"})
    }
    await User.updateOne({       // will not update if querry put after update body (did it mistakenly)
        _id : req.userId
    },req.body)

    res.json({
        msg : "updated successfully"
    })
})

// serach user for payment
router.get("/bulk", authMiddleware, async(req,res)=>{
   const filter = req.query.filter || "";
   console.log(filter)

//    let query = {};

//    if(filter.trim() !== " "){
//     query = {
//         $or : [
//             {firstName : {"$regex" : filter, "$options": "i" }}, // "$options": "i"  => to resolve query params (filter) case insensitive issue  
//             {lastName : {"$regex" : filter, "$options": "i" }},
//         ]
//     }
//    }

//    console.log(query)

   const users = await User.find({
    $or : [
        {firstName : {"$regex" : filter, "$options": "i" }}, // "$options": "i"  => to resolve query params (filter) case insensitive issue  
        {lastName : {"$regex" : filter, "$options": "i" }},
    ]
   })
   console.log(users)
   res.json({
    user: users.map((user)=>({
        username : user.username,
        firstName : user.firstName,
        lastName : user.lastName,
        id : user._id
    }))
})
})


module.exports = router;
