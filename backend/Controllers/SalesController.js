const SalesModel = require("../Models/Sales");

const TOTAL_CLEARANCE_ITEMS = 200; // A fixed number for the demo

const createSale = async (req, res) => {
  try {
    const { name, product, originalPrice, savedAmount, finalPrice } = req.body;
    const newSale = new SalesModel({
      name,
      product,
      originalPrice,
      savedAmount,
      finalPrice,
    });
    await newSale.save();
    res.status(201).json({
      message: "Sales Logged Successfully",
      success: true,
    });
  } catch (err) {
    console.error("Sales log Failed", err);
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

const getDashboardData = async (req, res) => {
  try {
    const sales = await SalesModel.find().sort({ timestamp: -1 });
    const itemsSaved = sales.length;
    const wasteReduced = sales.reduce((acc, sale) => acc + sale.savedAmount, 0);
    const avgSaving = itemsSaved > 0 ? (wasteReduced / itemsSaved).toFixed(2) : 0;
    const clearanceLeft = TOTAL_CLEARANCE_ITEMS - itemsSaved;
    const recent = sales.slice(0, 5).map((s) => ({
      name: s.name,
      product: s.product,
      saved: Number(s.savedAmount),
    }));

    res.status(200).json({
      itemsSaved,
      wasteReduced,
      avgSavingPerItem: avgSaving,
      clearanceLeft,
      tickerData: recent,
      success: true,
    });
  } catch (err) {
    console.error("Fetching dashboard failed", err);
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

module.exports = { createSale, getDashboardData };