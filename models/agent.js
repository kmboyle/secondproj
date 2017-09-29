module.exports = function(sequelize, DataTypes) {
    var Agent = sequelize.define("Agent", {
        userName: DataTypes.STRING,
        userVisits: DataTypes.INTEGER
    });

    Agent.associate = function(models) {

        Agent.hasMany(models.userQuestion, {
            onDelete: "cascade"
        });
    };

    return Agent;
};