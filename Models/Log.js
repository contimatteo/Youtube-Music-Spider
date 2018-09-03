////////////////////////////////////////////////////////////////////////////////
// import ORM instance and Datatypes
const Sequelize = require('sequelize');
var myORM = require('../Libraries/ORM.js');
const ORM = new myORM();
const DataTypes = Sequelize.DataTypes;
////////////////////////////////////////////////////////////////////////////////
// import main model
var Log = require("./BaseStructure/Logs.js")(ORM.sequelize, DataTypes);
////////////////////////////////////////////////////////////////////////////////
// import additional models (for define relations)
// ...
////////////////////////////////////////////////////////////////////////////////
// define relation
// ...
////////////////////////////////////////////////////////////////////////////////
// export model with structure and relations
module.exports = Log;
////////////////////////////////////////////////////////////////////////////////