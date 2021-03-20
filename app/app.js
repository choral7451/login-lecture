"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home"); // home 이란것을 설정 // 위치한 경로의 js(index.js)파일을 home로 받아들임

//앱 세팅
app.set("views", "./src/views");   // (뷰스 세팅, 폴더사용)
app.set("view engine", "ejs");  //  (뷰 엔진을, ejs으로 해석) * ejs(html이랑 비슷) - 뷰엔진

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드 (내보낸 router 받기위함)// "/" (루트)경로로 오게되면 홈으로 이동

module. exports = app;