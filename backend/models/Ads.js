const db=require('../configuration/database');
const sequelize=require('sequelize');
const Ad=db.define('Ads',{
    id:{type:sequelize.INTEGER,autoincrement:true,primaryKey:true},
    Date:{type:sequelize.STRING,allowNull:false},
    Title:{type:sequelize.STRING,allowNull:false},
    Content:{type:sequelize.STRING,allowNull:false},
    Picture:{type:sequelize.STRING,allowNull:false},
    Category:{type:sequelize.STRING,allowNull:false},
    Subcategory:{type:sequelize.STRING,allowNull:false},
    Userid:{type:sequelize.INTEGER,allowNull:false},
    Status:{type:sequelize.STRING,allowNull:false}
});
module.exports=Ad;