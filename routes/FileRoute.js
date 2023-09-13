import  express from "express";
import { verifyToken } from "../middlewares/verifyToken.js";


const fileRouter = express.Router();

fileRouter.post("/api/save", verifyToken);


export default fileRouter;