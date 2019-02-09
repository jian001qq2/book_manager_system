module.exports = function(sequelize, DataTypes) {
  var Admin = sequelize.define('Admin', {
    firstName:{type: DataTypes.STRING},
    lastName:{type: DataTypes.STRING},
    email:{type:DataTypes.STRING},
    userName:{type:DataTypes.STRING},
    password:{type:DataTypes.INTEGER}
  },{
    freezeTableName:{type: DataTypes.BOOLEAN}
  });
  return Admin;
};
