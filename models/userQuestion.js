module.exports = function(sequelize, DataTypes) {
    var userQuestion = sequelize.define("userQuestion", {
        answered: DataTypes.BOOLEAN
    });

    userQuestion.associate = function(models) {
        userQuestion.belongsTo(models.Agent, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return userQuestion;

};