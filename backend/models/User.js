const db=require('../configuration/database');
const sequelize=require('sequelize');
const User=db.define('Users',{
    id:{type:sequelize.INTEGER,autoIncrement:true,primaryKey:true},
    Name:{type:sequelize.STRING,allowNull:false},
    Password:{type:sequelize.STRING,allowNull:false},
    Phone:{type:sequelize.STRING,allowNull:false},
    Location:{type:sequelize.STRING,allowNull:false},
    Picture:{type:sequelize.STRING,allowNull:false},
    Status:{type:sequelize.STRING,allowNull:false}
});
module.exports=User;