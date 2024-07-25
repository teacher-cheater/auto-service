"use client";
import styles from "./page.module.css";
import { Table, Select, Pagination } from "antd";

const { Option } = Select;

export default function Home() {
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
