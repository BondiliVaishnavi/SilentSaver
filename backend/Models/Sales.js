const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema({
  name: String,
  product: String,
  originalPrice: Number,
  savedAmount: Number,
  finalPrice: Number,
  timestamp: { type: Date, default: Date.now },
});

const SalesModel = mongoose.model("sales", saleSchema);

module.exports = SalesModel;