const db=require('../configuration/database');
const sequelize=require('sequelize');
const Skill=db.define('Skills',{
    id:{type:sequelize.INTEGER,autoincrement:true,primaryKey:true},
    Userid:{type:sequelize.INTEGER,allowNull:false},
    Skill:{type:sequelize.INTEGER,allowNull:false}
});
module.exports=Skill;