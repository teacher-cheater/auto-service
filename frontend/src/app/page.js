"use client";
import { Suspense, useEffect, useState } from "react";
import axios from "axios";
import BrandSelector from "./components/BrandSelector";
import ModelSelector from "./components/ModelSelector";
import StockTable from "./components/StockTable";
import styles from "./page.module.css";

export default function Home() {
  const [models, setModels] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModels, setSelectedModels] = useState([]);
  const [stock, setStock] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchBrands();
  }, []);

  useEffect(() => {
    if (selectedBrand) {
      fetchModels(selectedBrand);
      fetchStock(selectedBrand, selectedModels, page);
    }
  }, [selectedBrand, selectedModels, page]);

  const fetchBrands = async () => {
    try {
      const response = await axios.get("http://localhost:4444/api/brands");
      setBrands(response.data);
    } catch (error) {
      console.error("Ошибка при загрузке списка марок");
    }
  };

  const fetchModels = async brand => {
    try {
      const response = await axios.get(
        `http://localhost:4444/api/models/${brand}`
      );
      setModels(response.data);
    } catch (error) {
      console.error("Ошибка при загрузке моделей");
    }
  };

  const fetchStock = async (brand, models, page) => {
    try {
      const response = await axios.get("http://localhost:4444/api/stock", {
        params: { mark: brand, models: models.join(","), page },
      });
      setStock(response.data.stocks);
      setTotal(response.data.totalCount);
    } catch (error) {
      console.error("Ошибка при загрузке стока");
    }
  };

  const columns = [
    { title: "ID", dataIndex: "_id", key: "_id" },
    { title: "Марка", dataIndex: "mark", key: "mark" },
    { title: "Модель", dataIndex: "model", key: "model" },
    { title: "Модификация", dataIndex: "modification", key: "modification" },
    { title: "Комплектация", dataIndex: "configuration", key: "configuration" },
    {
      title: "Стоимость",
      dataIndex: "price",
      key: "price",
      render: price => `${price.toLocaleString()} ₽`,
    },
    {
      title: "Дата создания",
      dataIndex: "createdAt",
      key: "createdAt",
      render: date => new Date(date).toLocaleDateString(),
    },
  ];

  const handleBrandClick = brand => {
    setSelectedBrand(brand);
    setSelectedModels([]);
  };

  const handleModelChange = value => {
    setSelectedModels(value);
  };

  return (
    <main className={styles.main}>
      <Suspense fallback={<p>Loading auto...</p>}>
        <BrandSelector
          brands={brands}
          selectedBrand={selectedBrand}
          onBrandClick={handleBrandClick}
        />
        <ModelSelector
          models={models}
          selectedModels={selectedModels}
          onModelChange={handleModelChange}
          disabled={!selectedBrand}
        />
        <StockTable
          columns={columns}
          stock={stock}
          page={page}
          total={total}
          onPageChange={setPage}
        />
      </Suspense>
    </main>
  );
}
