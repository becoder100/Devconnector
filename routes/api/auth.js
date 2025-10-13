const express=require('express');
const bcrypt=require('bcryptjs');
const router=express.Router();
const auth=require('../../middleware/auth');
const User=require('../../models/User');
const { check, validationResult } = require('express-validator');
const jwt=require('jsonwebtoken');
const config=require('config');

router.get('/',auth, async(req,res)=>{
    try{
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);

    }catch(err){
      res.send('Server Error');
    }
});
//post api/auth
//desc authenticate user & get token
//access public
router.post('/',[
    
    check('email','Please include a valid email').isEmail(),
    check('password','password is required').exists()
],
async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    const{email,password}=req.body;
    try{
    // see if user exists
    //return jsonwebtoken
    let user=await User.findOne({ email });
    if(!user){
        return res.status(400).json({ errors: [{ msg: 'invalid credential' }] });
    }
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    }
    const payload={
        user:{
            id:user.id
        }
    };
    jwt.sign(payload,config.get('jwtSecret'),
    {expiresIn:360000},
    (err,token)=>{
        if(err) throw err;
        res.json({ token });
    });

    

    }catch(errors){
        console.error(errors.message);
        res.status(500).send('Server error');
    }


    
});
module.exports=router;

