import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDb from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import cors from "cors";

dotenv.config();
const app = express();

connectDb();
//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoutes);

app.get("/", (req, res) => {
  res.send("<h1>This is App</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} on  ${PORT}`.bgYellow.white
  );
});