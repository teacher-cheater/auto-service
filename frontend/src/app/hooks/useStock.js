"use client";
import { useState, useEffect } from "react";
import axios from "../utils/api.js";

const useStock = (brand, models, page) => {
  const [stock, setStock] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchStock = async () => {
      if (brand) {
        try {
          const response = await axios.get("/stock", {
            params: { mark: brand, models: models.join(","), page },
          });
          setStock(response.data.stocks);
          setTotal(response.data.totalCount);
        } catch (error) {
          console.error("Ошибка при загрузке стока");
        }
      }
    };
    fetchStock();
  }, [brand, models, page]);

  return { stock, total };
};

export default useStock;
