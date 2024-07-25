"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Table, Select, Pagination, message } from "antd";
import axios from "axios";
const { Option } = Select;

export default function Home() {
  const [models, setModels] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModels, setSelectedModels] = useState([]);
  const [stock, setStock] = useState([]);

  console.log("selectedModels", selectedModels);
  // console.log("brands", brands);

  useEffect(() => {
    fetchBrands();
  }, []);

  useEffect(() => {
    if (selectedBrand) {
      fetchModels(selectedBrand);
      fetchStock(selectedBrand, selectedModels);
    }
  }, [selectedBrand, selectedModels]);

  const fetchBrands = async () => {
    try {
      const response = await axios.get("http://localhost:4444/api/brands");
      setBrands(response.data);
    } catch (error) {
      message.error("Ошибка при загрузке списка марок");
    }
  };

  const fetchModels = async brand => {
    console.log("brand--", brand);
    try {
      const response = await axios.get(
        `http://localhost:4444/api/models/${brand}`
      );
      console.log("response", response.data);
      setModels(response.data);
    } catch (error) {
      message.error("Ошибка при загрузке моделей");
    }
  };

  const fetchStock = async (brand, models) => {
    try {
      const response = await axios.get("http://localhost:4444/api/stock", {
        params: { mark: brand, models: models.join(",") },
      });
      setStock(response.data);
    } catch (error) {
      message.error("Ошибка при загрузке стока");
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

  return (
    <main className={styles.main}>
      {/* <div style={{}}>
        {brands.map(brand => (
          <span
            onClick={value => setSelectedBrand(value)}
            style={{
              display: "inlineBlock",
              color: "blue",
              marginRight: "12px",
            }}
            key={brand.count}
          >
            {brand.mark} {brand.count}{" "}
          </span>
        ))}
      </div> */}

      <p>Модель:</p>
      <Select
        placeholder="Выберите марку"
        style={{ width: 200 }}
        onChange={brand => setSelectedBrand(brand)}
      >
        {brands.map(brand => (
          <Option key={brand.mark} value={brand.mark}>
            {brand.mark} ({brand.count})
          </Option>
        ))}
      </Select>
      <Select
        mode="multiple"
        placeholder="Выберите модели"
        style={{ width: 300, marginLeft: 20 }}
        onChange={value => setSelectedModels(value)}
        disabled={!selectedBrand}
      >
        {models.map(model => (
          <Option key={model} value={model}>
            {model}
          </Option>
        ))}
      </Select>
      <Table
        columns={columns}
        dataSource={stock}
        pagination={false}
        rowKey="_id"
        style={{ marginTop: 20 }}
      />
      <Pagination style={{ marginTop: 20 }} />
    </main>
  );
}
