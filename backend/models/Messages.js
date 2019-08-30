const db=require('../configuration/database');
const sequlize=require('sequelize');
const Message=db.define('Messages',{
    id:{type:sequlize.INTEGER,autoincrement:true,primaryKey:true},
    Text:{type:sequlize.STRING,allowNull:false},
    senderId:{type:sequlize.INTEGER,allowNull:false},
    recieverId:{type:sequlize.INTEGER,allowNull:false}
});

module.exports=Message;