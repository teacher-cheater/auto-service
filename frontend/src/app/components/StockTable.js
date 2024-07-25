"use client";
import { Table, Pagination } from "antd";

const StockTable = ({ columns, stock, page, total, onPageChange }) => {
  return (
    <>
      <Table
        columns={columns}
        dataSource={stock}
        pagination={false}
        rowKey="_id"
        style={{ marginTop: 20 }}
      />
      <Pagination
        current={page}
        total={total}
        pageSize={20}
        onChange={onPageChange}
        style={{ marginTop: 20, display: "flex", justifyContent: "flex-end" }}
      />
    </>
  );
};

export default StockTable;
