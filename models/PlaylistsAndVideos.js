////////////////////////////////////////////////////////////////////////////////
// import ORM instance and Datatypes
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
////////////////////////////////////////////////////////////////////////////////
// import main model
var PlaylistsAndVideos = require("./baseStructure/PlaylistsAndVideos.js")(global.ORM.sequelize, DataTypes);
////////////////////////////////////////////////////////////////////////////////
// import additional models (for define relations)
// ...
////////////////////////////////////////////////////////////////////////////////
// define relation
// ...
////////////////////////////////////////////////////////////////////////////////
// export model with structure and relations
module.exports = PlaylistsAndVideos;
////////////////////////////////////////////////////////////////////////////////