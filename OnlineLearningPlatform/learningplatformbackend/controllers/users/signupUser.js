const usersSchema = require("../../models/userSchema");
const bcrpyt = require("bcrypt");


const signupUser = async (req , res) => {
    try{
        const exist = await usersSchema.findOne({email : req.body.email})
        if (exist){
            console.log("User already exists");
            res.status(401).send(exist);
            res.end();
            return;
        }
        else{
            const hashed_password = bcrpyt.hashSync(req.body.password , 10);
            console.log(hashed_password);
            res.status(200).send({hashed_password : hashed_password});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).send({msg :  err});
        return;
    }
}

exports.signupUser = signupUser;