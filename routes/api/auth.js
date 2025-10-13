const express=require('express');
const router=express.Router();
const middleware=require('../../middleware/auth');

router.get('/',(req,res)=>res.send('auth route' ));
module.exports=router;