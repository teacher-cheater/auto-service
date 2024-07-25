"use client";
import { useState, useEffect } from "react";
import axios from "../utils/api.js";

const useModels = brand => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    const fetchModels = async () => {
      if (brand) {
        try {
          const response = await axios.get(`/models/${brand}`);
          setModels(response.data);
        } catch (error) {
          console.error("Ошибка при загрузке моделей");
        }
      }
    };
    fetchModels();
  }, [brand]);

  return models;
};

export default useModels;
