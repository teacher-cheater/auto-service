"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Table, Select, Pagination, message } from "antd";
import axios from "axios";
const { Option } = Select;

export default function Home() {
  // const [models, setModels] = useState([]);
  const [brands, setBrands] = useState([]);

  // console.log("models", models);
  console.log("brands", brands);

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      const response = await axios.get("http://localhost:4444/api/brands");
      setBrands(response.data);
    } catch (error) {
      message.error("Ошибка при загрузке списка марок");
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
      <Select
        mode="multiple"
        placeholder="Выберите модели"
        style={{ width: 300, marginLeft: 20 }}
      >
        <Option key="model" value="model"></Option>
      </Select>
      <Table columns={columns} rowKey="_id" style={{ marginTop: 20 }} />
      <Pagination style={{ marginTop: 20 }} />
    </main>
  );
}
