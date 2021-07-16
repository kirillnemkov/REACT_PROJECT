require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const { connect } = require("./src/db/db");
const app = express();
const userRouter = require("./src/routes/userRouter");
const fileRouter = require("./src/routes/fileRouter");
const indexRouter = require("./src/routes/indexRouter");
const profileRouter = require("./src/routes/profileRouter");
const projectRouter = require("./src/routes/projectRouter");
const errorMiddleware = require("./src/middlewars/error-middleware");

const { PORT } = process.env;

const storage = multer.memoryStorage();
app.use(multer({ storage }).single("file"));

app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use("/api/v1", userRouter);
app.use("/api/v1/files", fileRouter);
app.use("/", indexRouter);
app.use("/user", profileRouter);
app.use("/project", projectRouter);

app.use(errorMiddleware);

const start = async () => {
  try {
    await connect();
    app.listen(PORT, () => console.log(`Server has been started on PORT: ${PORT} `));
  } catch (e) {
    console.log(e);
  }
};

start();
