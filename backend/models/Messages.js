const db=require('../configuration/database');
const sequlize=require('sequelize');
const Message=db.define('Messages',{
    id:{type:sequlize.INTEGER,autoincrement:true,primaryKey:true},
    Message:{type:sequlize.STRING,allowNull:false},
    senderId:{type:sequlize.INTEGER,allowNull:false},
    sendername:{type:sequlize.STRING,allowNull:false},
    recieverId:{type:sequlize.INTEGER,allowNull:false},
    recieverName:{type:sequlize.STRING,allowNull:false}
});

module.exports=Message;