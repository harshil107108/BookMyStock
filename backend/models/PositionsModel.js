const { model } = require("mongoose");
const { PositionsSchema } = require("../schemas/PositionsSchema.js");

const PositionsModel = model("postion", PositionsSchema);

module.exports = { PositionsModel };
