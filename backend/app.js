import express, { json } from "express";

const app = express();

// Включаем обработку JSON
app.use(json());

const PORT = process.env.PORT || 4444;

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
