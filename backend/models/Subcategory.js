const db=require('../configuration/database');
const sequelize=require('seuqelize');
const Subcategory=db.define('Subcategories',{
    id:{type:sequelize.INTEGER,autoincrement:true,prirmaryKey:true},
    Name:{type:sequelize.STRING,allowNull:false},
    Categoryid:{type:sequelize.INTEGER,allowNull:false}
});
module.exports=Subcategory;