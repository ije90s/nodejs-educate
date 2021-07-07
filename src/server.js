import express from "express"; // == const express = require("express");
import morgan from "morgan"; 
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000; 

const app = express(); // application 생성(express 사용 규칙)
const logger = morgan("dev");
app.use(logger);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);


const handleServer = () => console.log(`Server listening on port PORT`); 
app.listen(PORT, handleServer); //서버 포트 4000번 열림 




