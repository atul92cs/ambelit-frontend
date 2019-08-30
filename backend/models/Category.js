const db=require('../configuration/database');
const sequelize=require('sequelize');
const Category=db.define('Categories',{
    id:{type:sequelize.INTEGER,autoincrement:true,primaryKey:true},
    Name:{type:sequelize.STRING,allowNull:false}
});
module.exports=Category;