const SalesModel = require("../Models/Sales");

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
    console.log("Sales log Failed", err);
    res.status(500).json({
      message: "Internal Sever Error",
      success: false,
    });
  }
};

const getDashboardData = async (req, res) => {
  try {
    const sales = await SalesModel.find().sort({ timestamp: -1 });
    const itemsSaved = sales.length;
    const wasteReduced = sales.reduce((acc, sale) => acc + sale.savedAmount, 0);
    const recent = sales.slice(0, 5).map((s) => ({
      name: s.name,
      product: s.product,
      saved: s.savedAmount,
    }));
    res.status(200).json({
      itemsSaved,
      wasteReduced,
      recent,
      success: true,
    });
  } catch (err) {
    console.log("Fetching sales failed", err);
    res.status(500).json({
      message: "Internal Sever Error",
      success: false,
    });
  }
};

module.exports = { createSale, getDashboardData };

