const DataTypes = require('sequelize');
const sequelize = require('../config/database');

const Auth = sequelize.define('Auth',{
    username:{
        type: DataTypes.STRING(100),
        allowNull : false,
        unique: true,
        primaryKey: true
    },
    firstName:{
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    middleName:{
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    lastName:{
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    email:{
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    password:{
        type: DataTypes.STRING(100),
        allowNull:false
    }
    
});

module.exports ={
    Auth
}
