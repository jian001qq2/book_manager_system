module.exports = function (sequelize, DataTypes) {
    var Category = sequelize.define("category", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
        },

    });

    Category.associate = function (models) {
        Category.belongsTo(models.Book, {
            foreignKey: "categoryId",
            onDelete: 'CASCADE'
        });
    };



    return Category;
};