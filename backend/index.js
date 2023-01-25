const cors = require("cors");
const express = require("express");
const linkRouter = require("./route/link");
const userRouter = require("./route/userRoute.js");
require("dotenv").config();
const connectDB = require("./config/database.js");
const app = express();
const port = 8000;
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};
connectDB();
app.use(cors(corsOptions));
app.use(express.json());
app.use("/link", linkRouter);
app.use("/user", userRouter);

app.listen(port, () => {
  console.log("Server is running on", port);
});
