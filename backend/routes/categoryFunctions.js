const express=require('express');
const router=express.Router();
const Category=require('../models/Category');
router.post('/add',(req,res)=>{
    const Name=req.body.name;
    Category.create({Name:Name}).then((result) => {
        res.status(200).json({
            msg:'category created'
        });
    }).catch((err) => {
        res.status(403).json({
            msg:'error occured',
            error:err
        });
    });
});
router.get('/',(req,res)=>{
    Category.findAll({}).then(result=>{
      res.status(200).json({
        result
      });
    },err=>{
       res.status(401).json({
         message:'error occured',
         error:err
       });
    });
  });

  module.exports=router;