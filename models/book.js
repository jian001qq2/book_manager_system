module.exports = function (sequelize, DataTypes) {
  var Book = sequelize.define("Book", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull:false
    },
    description: {
      type: DataTypes.TEXT
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: "https://via.placeholder.com/200"
    },
 total:{
   type: DataTypes.INTEGER,
   defaultValue:1
 },
 saved:{
   type:DataTypes.BOOLEAN,
   defaultValue:false
 }
  });  
  Book.associate = (models) => {
    Book.belongsToMany(models.User, {
      through: 'BorrowedBook',
      foreignKey: 'bookId',
      otherKey: 'userId',
      unique: false
    });
  };
 
  return Book;
};
