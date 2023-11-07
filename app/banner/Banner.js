const { DataTypes } = require("sequelize");
const sequelize = require('../../config/db')
const Company=require("../auth/models/Company")
const Banner = sequelize.define('Banner', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bannerNumber:{
        type: DataTypes.STRING,
        allowNull: false
      },
    banerAddress:{
        type: DataTypes.STRING,
        allowNull: false
      },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    uniqueCode:{
        type:DataTypes.STRING,
        allowNull:false
    },
    createdDate:{
      type:DataTypes.STRING,
      allowNull:false
  },
    rentDays:{
      type:DataTypes.STRING,
      allowNull:true
  },
    expiredDate:{
      type:DataTypes.STRING,
      allowNull:false
  },

  bannerLatitude:{
    type:DataTypes.STRING,
    allowNull:false
},

  bannerLongitude:{
    type:DataTypes.STRING,
    allowNull:false
},

  
    // Другие поля баннера
  });
  
  // Установите связь "многие ко многим" между Company и Banner
  Company.hasMany(Banner);
  Banner.belongsTo(Company);
  
  module.exports = Banner;