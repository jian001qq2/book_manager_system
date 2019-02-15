module.exports = function (sequelize, DataTypes) {
    var BorrowedBook = sequelize.define("BorrowedBook", {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          bookId: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
        returned: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    });
    return BorrowedBook;
};