import express from "express";
import {
  getBrands,
  getModels,
  getStock,
} from "../controllers/stockController.js";

const router = express.Router();

router.get("/brands", getBrands);
router.get("/models/:mark", getModels);
router.get("/stock", getStock);

export default router;
