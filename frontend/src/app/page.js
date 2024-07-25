"use client";
import { useState } from "react";
import useBrands from "./hooks/useBrands";
import useModels from "./hooks/useModels";
import useStock from "./hooks/useStock";
import BrandSelector from "./components/BrandSelector";
import ModelSelector from "./components/ModelSelector";
import StockTable from "./components/StockTable";
import styles from "./page.module.css";

export default function Home() {
  const brands = useBrands();
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModels, setSelectedModels] = useState([]);
  const [page, setPage] = useState(1);

  const models = useModels(selectedBrand);
  const { stock, total } = useStock(selectedBrand, selectedModels, page);

  const handleBrandClick = brand => {
    setSelectedBrand(brand);
    setSelectedModels([]);
  };

  const handleModelChange = value => {
    setSelectedModels(value);
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

  return (
    <main className={styles.main}>
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
    </main>
  );
}
