const User = require('../models/user');

const registerUser = async (req,res) => {
    try {
        const { name , email , password} = req.body;

        if(!name || !email || !password){
            return res.status(400).json({message : "Please fill all credentials for register"});
        }

        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(409).json({message : "User already exists"});
        }

        await User.create({
            name,
            email,
            password
        });

        res.status(201).json({message : "User registered"});

    } catch (error) {
        return res.status(500).json({message : error.message});
    }
};

module.exports = {registerUser};