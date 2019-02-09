module.exports = function (sequelize, DataTypes) {
    var BorrowedBook = sequelize.define("borrowedBook", {
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
        returned: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    });

    // BorrowedBook.associate = function (models) {
    //     BorrowedBook.belongsTo(models.User, {
    //         foreignKey: "userId",
    //         onDelte: "CASCADE"
    //     });

    //     BorrowedBook.belongsTo(models.Book, {
    //         foreignKey: 'bookId',
    //         onDelete: 'CASCADE'
    //     });
    // };



    return BorrowedBook;
};