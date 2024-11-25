const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const userRouter = require("./router/userRouter");
const authRouter = require("./router/authRouter");
const tokenRouter = require("./router/tokensRouter");
const categoryRouter = require("./router/categoryRouter");
const itemRouter = require("./router/itemRouter");
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/tokens", tokenRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/items", itemRouter);

module.exports = app;
