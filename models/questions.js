module.exports = function(sequelize, DataTypes) {
    var Question = sequelize.define("Question", {
        uuid: {
            type: DataTypes.STRING

        },
        city: {
            type: DataTypes.STRING,

        },
        question: {
            type: DataTypes.STRING,

        },
        correct_answer: {
            type: DataTypes.STRING
        },
        visited: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        questionVisit: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    Question.associate = function(models) {
        Question.belongsTo(models.Agent, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Question;
};