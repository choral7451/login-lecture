"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl"); // 경로에 있는 js 파일을 받아옴

router.get("/", ctrl.home);     //    "/" 이러한 도메인에 왔을때 home/index로 이동하는 명령어  // 라우팅이라고 칭하며 라우트폴더에 따로 보관이 일반적

router.get("/login", ctrl.login);

module.exports = router; // router을 외부에서 사용하기 위해 내보내는 명령어