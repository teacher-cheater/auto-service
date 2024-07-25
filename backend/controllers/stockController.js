import connectDB from "../models/stockModel.js";

export async function getBrands(req, res) {
  try {
    const db = await connectDB();
    const brands = await db
      .collection("stock")
      .aggregate([
        { $group: { _id: "$mark", count: { $sum: 1 } } },
        { $project: { _id: 0, mark: "$_id", count: 1 } },
      ])
      .toArray();
    res.json(brands);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getModels(req, res) {
  try {
    const { mark } = req.params;
    const db = await connectDB();
    const models = await db.collection("stock").distinct("model", { mark });
    res.json(models);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getStock(req, res) {
  try {
    const { mark, models, page = 1 } = req.query;
    const db = await connectDB();
    const query = {};

    if (mark) {
      query.mark = mark;
    }

    if (models) {
      query.model = { $in: models.split(",") };
    }

    const totalCount = await db.collection("stock").countDocuments(query);

    const stocks = await db
      .collection("stock")
      .find(query)
      .skip((page - 1) * 20)
      .limit(20)
      .toArray();

    res.json({ stocks, totalCount });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
