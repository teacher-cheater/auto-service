"use client";
import { Table } from "antd";
import PaginationControls from "./PaginationControls";

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
      <PaginationControls
        page={page}
        total={total}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default StockTable;
