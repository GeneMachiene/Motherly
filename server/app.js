const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");
const testRouter = require("./routes/test");
const userRoutes = require("./routes/user");
const childRoutes = require("./routes/child");
const apiRoutes = require("./routes/api");
const locationRoutes = require("./routes/location");

const app = express();

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URI);
}

app.use(logger("dev"));
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/test", testRouter);
app.use("/user", userRoutes);
app.use("/child", childRoutes);
app.use("/api", apiRoutes);
app.use("/location", locationRoutes);

module.exports = app;
