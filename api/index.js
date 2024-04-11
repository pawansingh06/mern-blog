import express from "express";
import mongoos from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";

dotenv.config();

mongoos
  .connect(process.env.MONGO)
  .then(() => {
    console.log("monogoDB is connected");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

app.use('/api/user',userRoutes);
