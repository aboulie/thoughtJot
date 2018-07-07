module.exports = function(sequelize, DataTypes){

    var UserData = sequelize.define("UserData", {
        title: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        entry: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
    return UserData;
}