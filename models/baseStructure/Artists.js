/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Artists', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '',
      unique: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dbpedia_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.ENUM('','artist','band'),
      allowNull: true,
      defaultValue: 'artist'
    },
    formatted_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '',
      unique: true
    }
  }, {
    tableName: 'Artists'
  });
};
