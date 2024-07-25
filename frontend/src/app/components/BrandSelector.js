"use client";
import { Tag } from "antd";

const BrandSelector = ({ brands, selectedBrand, onBrandClick }) => {
  return (
    <div>
      {brands.map(brand => (
        <Tag
          key={brand.mark}
          onClick={() => onBrandClick(brand.mark)}
          style={{
            cursor: "pointer",
            paddingLeft: 0,
            marginBottom: 12,
            color: selectedBrand === brand.mark ? "red" : "blue",
            border: "none",
            background: "inherit",
            fontWeight: selectedBrand === brand.mark ? "bold" : "normal",
          }}
        >
          <span style={{ color: "blue" }}>{brand.mark}</span>{" "}
          <span style={{ color: "black" }}>{brand.count}</span>
        </Tag>
      ))}
    </div>
  );
};

export default BrandSelector;
