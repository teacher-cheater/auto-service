import express from "express";
import stockRoutes from "./routes/stockRoutes.js";

const app = express();
const PORT = process.env.PORT || 4444;

app.use(express.json());

app.use("/api", stockRoutes);

app.get("/", (req, res) => {
  res.send("Hello!!!"); // Тестовая страница
});

app.listen(PORT, err => {
  return err ? console.log(err) : console.log(`Server OK. PORT ${PORT}`);
});
