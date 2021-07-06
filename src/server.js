import express from "express"; // == const express = require("express");
import morgan from "morgan"; 

const PORT = 4000; 

const app = express(); // application 생성(express 사용 규칙)
const logger = morgan("dev");

/*const logger = (req, res, next) =>{
    console.log(`${req.method} ${req.url}`);
    next(); 
}; 

const privateMiddleware = (req, res, next) =>{
    const url = req.url; 
    if(url == "/protected"){
        return res.send("<h1>Not Allowed</h1>"); 
    }
    console.log("Allowed, you may countinue");
    next(); 
};*/

const handleHome = (req, res) => {
    return res.send("<h1>ddd</h1>"); 
}; // 첫번째 인자 : request, 두번째 인자 : response. handleHome == controller 

const handleLogin = (req, res) => {
    return res.send("Login here");
};

const handleProtected = (req, res) => {
    return res.send("Welcome to the private lounge"); 
};


//app.use(logger);
//app.use(privateMiddleware); 
app.use(logger);
app.get("/", handleHome); // get request 실행 
app.get("/login", handleLogin); 
app.get("/protected", handleProtected);

const handleServer = () => console.log(`Server listening on port PORT`); 

app.listen(PORT, handleServer); //서버 포트 4000번 열림 




