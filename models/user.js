module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("user", {
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    }, 
    username: {
      type: DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    password: {
      type: DataTypes.STRING
    },
   
    signedIn: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    advancedUser: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  // User.associate = function (models) {
  //   User.hasMany(models.BorrowedBook, {
  //     foreignKey: "userId"
     
  //   });


  // };

  return User;
};