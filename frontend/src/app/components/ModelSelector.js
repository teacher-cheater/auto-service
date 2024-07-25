"use client";
import { Select } from "antd";

const { Option } = Select;

const ModelSelector = ({ models, selectedModels, onModelChange, disabled }) => {
  return (
    <Select
      mode="multiple"
      placeholder="Выберите модели"
      style={{ width: 200 }}
      onChange={onModelChange}
      value={selectedModels}
      disabled={disabled}
    >
      {models.map(model => (
        <Option key={model} value={model}>
          {model}
        </Option>
      ))}
    </Select>
  );
};

export default ModelSelector;
