const epxress=require('express');
const router=epxress.Router();
const ad=require('../models/Ads');
const multer=require('multer');
const cloudinary=require('cloudinary');
const sequelize=require('sequelize');
const storage=multer.diskStorage({
    filename:(req,file,callback)=>{
        callback(null,Date.now(),+file.originalname);
    }
});
const upload=multer({storage:storage});
cloudinary.config({
    cloud_name:'dkhk4gyey',
  api_key:'459656749761335',
  api_secret:'AS_y6ZzH7FAjeoIxF1IjtMFKzQg'
});
router.post('/create',async(req,res)=>{
    const Date=req.body.date;
    const Title=req.body.title;
    const Content=req.body.content;
    const Picture=await cloudinary.v2.uploader.upload(req.body.picture);
    const Category=req.body.category;
    const Subcategory=req.body.subcategory;
    const Userid=req.body.id;
    ad.create({
        Date:Date,
        Title:Title,
        Content:Content,
        Picture:Picture,
        Category:Category,
        Subcategory:Subcategory,
        Userid:Userid,
        Status:"false"
    }).then(() => {
       res.status(200).json({
           message:'Ad created'
       }); 
    }).catch((err) => {
        res.status(402).json({
            message:'érror occured',
            error:err
        });
    });
});
router.get('/',(req,res)=>{
  ad.sequelize.query('select ads.Userid,ads.id,ads.Date,ads.Status,ads.Title,ads.Content,ads.Picture,categories.Name as Category,subcategories.Name as Subcategory,users.Name as Name from ads join subcategories on ads.Subcategory=subcategories.id join categories on ads.Category=categories.id join users on ads.Userid=users.id where ads.Status=? ',{replacements:"true",type:sequelize.QueryTypes.SELECT}).then(result=>{
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
router.get('/:id',(req,res)=>{
    const id=req.params.id;
    model.sequelize.query('select ads.Userid,ads.id,ads.Date,ads.Status,ads.Title,ads.Content,ads.Picture,categories.Name as Category,subcategories.Name as Subcategory,users.Name as Username from ads join subcategories on ads.Subcategory=subcategories.id join categories on ads.Category=categories.id join users on ads.Userid=users.id where Userid =?',{replacements:[id],type:sequelize.QueryTypes.SELECT}).then(result=>{
      res.status(200).json({
        result
      });
    }).catch(err=>{
       res.status(401).json({
         err
       });
    });
  });
  
router.delete('/:id',(req,res)=>{
    ad.destroy({where:{id:id}}).then(result=>{
         if(result==1)
         {
             res.status(200).json({
                 msg:'Ad deleted'
             });
         }
         else
         {
             res.status(403).json({
                 msg:'error occured',
                 error:err
             });
         }
    }).catch(err=>{
           res.status(405).json({
               msg:'error occured',
               error:err
           });
    });
});
module.exports=router;