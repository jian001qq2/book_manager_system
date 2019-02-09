module.exports = function (sequelize, DataTypes) {
  var Book = sequelize.define("book", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING
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
  Book.associate = function(models) {
   
   Book.hasOne(models.Category, {
      foreignKey: 'bookId'
    });
  };

  return Book;
};
