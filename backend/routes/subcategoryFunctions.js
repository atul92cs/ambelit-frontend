const express=require('express');
const sequelize=require('sequelize');
const router=express.router();
const Subcategory=require('../models/Subcategory');
router.post('/add',(req,res)=>{
     Subcategory.create({
         Name:req.body.name,
         Subcategory:req.body.subcategory
     }).then(()=>{
         res.status(200).json({
             message:'Subcategory created'
         });
     }).catch(err=>{
         res.status(403).json({
           message:'Error occured',
           error:err
         });
     });
});
router.get('/',(req,res)=>{
     Subcategory.sequelize.query('SELECT subcategories.id,subcategories.Name,categories.Name as Category from subcategories join categories where subcategories.Categoryid=categories.id').then(result=>{
         res.status(200).json({
             result
         });
     }).catch(err=>{
         res.status(403).json({
             message:'error occured',
             error:err
         });
     });
});
module.exports=router;