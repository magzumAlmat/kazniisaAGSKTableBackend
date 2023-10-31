const {DataTypes} = require('sequelize')
const sequelize = require('../../../config/db')

const Company = sequelize.define('Company', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true

    },
    bin:{ type: DataTypes.STRING,
        allowNull: false,
        unique: true},
        
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false

    },
  

    address: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true

    },
    contactPhone:{
        type:DataTypes.STRING,
        allowNull:false
    },
    contactEmail:{
        type:DataTypes.STRING,
        allowNull:false
    },

},{
    timestamps:false,})


module.exports = Company;
