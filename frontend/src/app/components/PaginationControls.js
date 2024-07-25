"use client";

import { Pagination } from "antd";

const PaginationControls = ({ page, total, onPageChange }) => {
  return (
    <Pagination
      current={page}
      total={total}
      pageSize={20}
      onChange={onPageChange}
      style={{ marginTop: 20, display: "flex", justifyContent: "flex-end" }}
    />
  );
};

export default PaginationControls;
