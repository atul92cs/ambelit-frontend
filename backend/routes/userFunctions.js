const User=require('../models/User');
const express=require('express');
const router=express.Router();
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const cloudinary=require('cloudinary');
const multer=require('multer');
const sequelize=require('sequelize');
const storage=multer.diskStorage({
    filename:(req,file,callback)=>{
        callback(null,Date.now()+file.originalname);
    }
});
const upload=multer({storage:storage});
cloudinary.config({
   cloud_name:'dkhk4gyey',
  api_key:'459656749761335',
  api_secret:'AS_y6ZzH7FAjeoIxF1IjtMFKzQg'
});
router.post('/register',async (req,res)=>{
    const Name=req.body.name;
    const Email=req.body.email;
    const Password=req.body.password;
    const Phone=req.body.phone;
    const Location=req.body.location;
    const Picture=await cloudinary.v2.uploader.upload(req.body.piture);
    const Status='false';
    User.findAll({where:{Email:Eamil}}).then(user=>{
        if(user)
        {
          res.status(403).json({
              message:'User already exists'
          });
        }
        else
        {
            bcrypt.hash(Password,10).then(hash=>{
                User.create({
                    Email:Email,
                    Phone:Phone,
                    Password:hash,
                    Name:Name,
                    Location:Location,
                    Picture:Picture,
                    Status:Status
                }).then(()=>{
                  res.status(200).json({
                      message:'User registered'
                  });
                }).catch(err=>{
                  res.status(403).json({
                      message:'Error occured',
                      error:err
                  });
                });
            }).catch(err=>{});
        }
    }).catch(err=>{

    });
});
router.post('/login',(req,res)=>{
    const Email=req.body.email;
    const Password=req.body.password;
    let fetchedUser;
    User.findOne({where:{Email:Email}}).then(res=>{
        if(!res)
        {
            res.status(403).json({
                message:'User does not exists'
            });

        }
        fetchedUser=res;
        return bcrypt.compare(Password,fetchedUser.Password);
    }).then(result=>{
        if(!result)
        {
            res.status(404).json({
                message:'User not found'
            });
         const token=jwt.sign({email:fetchedUser.Email,id:fetchedUser.id},'Jackward');
         res.status(200).json({
             token:token,
             email:fetchedUser.email,
             id:fetchedUser.id,

         });
                }
    }).catch(err=>{
         res.status(403).json({
             message:'error occured',
             error:err
         });
    });
});
module.exports=router;
