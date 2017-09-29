module.exports = function(sequelize, DataTypes) {
    var Question = sequelize.define("Question", {
        question: {
            type: DataTypes.STRING,

        },
        correct_answer: {
            type: DataTypes.STRING
        },
        questionId: DataTypes.INTEGER
    });

    // Question.associate = function(models) {
    //     Question.belongsTo(models.userQuestion, {
    //         // foreignKey: {
    //         //     allowNull: false
    //         // }
    //     });
    // };

    return Question;
};