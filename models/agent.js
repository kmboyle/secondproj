module.exports = function(sequelize, DataTypes) {
    var Agent = sequelize.define("Agent", {
        username:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        berlin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        istanbul: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        london: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        moscow: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        prague: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        rome: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        warsaw: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    
    return Agent;
};