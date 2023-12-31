import express  from "express";
import { admind, creatord, userd } from "../controller/ProtectController.js";
import { verifyuserdashboard } from "../middlewares/verifyuserDashboard.js";
import { verifycreatordash } from "../middlewares/verifyCreatorDashboard.js";
import { verifyadmindash } from "../middlewares/verifyAdminDashboard.js";

const protectrouter = express();



  protectrouter.get("/user",verifyuserdashboard, userd);
  protectrouter.get("/creator",verifycreatordash, creatord);
  protectrouter.get("/admin",verifyadmindash,admind);
  

export default protectrouter;