const mongoose = require("mongoose");
const variables = require("../config/variables");
mongoose.connect(variables.connectionString);
module.exports = mongoose;
