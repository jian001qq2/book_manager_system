module.exports = function (sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
        },

    });

    Category.associate = function (models) {
        Category.hasMany(models.Book, {
            onDelete: 'CASCADE'
        });
    };



    return Category;
};