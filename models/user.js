module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
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
      type: DataTypes.STRING,
      allowNull:false
    },
   
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    advancedUser: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  User.associate = (models) => {
    User.belongsToMany(models.Book, {
      through: 'BorrowedBook',
      foreignKey: 'userId',
      otherKey: 'bookId',
      unique: false,
    });
    User.hasMany(models.Activity,{
      onDelete: "cascade"
    })
  };

  return User;
};