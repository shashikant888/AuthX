const DataTypes = require("sequelize");
const sequelize = require("../config/database");

const Users = sequelize.define("Users", {
  username: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    unique:true
  },
  firstName: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  middleName: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  lastName: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});

module.exports = {Users};


// const resetAutoIncrement = async () => {
//     try {
//       const tableName = 'Users';
//       const columnName = 'userId';

//       await sequelize.query(`ALTER TABLE ${tableName} AUTO_INCREMENT = 1`);
      
//       console.log(`Auto-increment for column ${columnName} reset successfully.`);
//     } catch (error) {
//       console.error('Error resetting auto-increment:', error.message);
//     }
//   };
  
//   resetAutoIncrement(); // reset autoincrement after deleting th existing data.
  