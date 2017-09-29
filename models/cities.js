module.exports = function(sequelize, DataTypes) {
    var city = sequelize.define("city", {
        uuid: {
            type: DataTypes.STRING

        },
        name: {
            type: DataTypes.STRING,

        }
    });

    // city.associate = function(models) {
    //     city.belongsTo(models.Question, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    return city;
};