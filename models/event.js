module.exports = function(sequelize, DataTypes) {
    var Activity= sequelize.define("Activity", {
      eventName:{type:DataTypes.STRING},
      summary: {type:DataTypes.TEXT},
      complete: {type:DataTypes.BOOLEAN,
      defaultValue: false},
      eventTime:{type:DataTypes.STRING},
      location:{type:DataTypes.TEXT},
      maxNumber:{type:DataTypes.INTEGER}
    }); 
    Activity.associate = (models) => {
      Activity.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    return Activity;
  };
  