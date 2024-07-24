import express from "express";
import {
  getBrands,
  getModels,
  getStock,
} from "../controllers/stockController.js";

const router = express.Router();

router.get("/brands", getBrands); // Получение списка марок
router.get("/models/:mark", getModels); // Получение моделей по марке
router.get("/stock", getStock); // Получение стока с фильтрацией и пагинацией

export default router;
