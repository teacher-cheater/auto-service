"use client";
import { useState, useEffect } from "react";
import axios from "../utils/api.js";

const useBrands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get("/brands");
        setBrands(response.data);
      } catch (error) {
        console.error("Ошибка при загрузке списка марок");
      }
    };
    fetchBrands();
  }, []);

  return brands;
};

export default useBrands;
