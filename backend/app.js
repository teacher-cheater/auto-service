import express from "express";
import stockRoutes from "./routes/stockRoutes.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4444;

app.use(cors());

app.use(express.json());

app.use("/api", stockRoutes);

app.listen(PORT, err => {
  return err ? console.log(err) : console.log(`Server OK. PORT ${PORT}`);
});
