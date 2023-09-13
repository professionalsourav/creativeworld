import express from "express"
import {signup, signin, googleAuth} from "../controller/AuthController.js"
import { isAdmin, requireSignIn } from "../middlewares/AuthMiddleware.js"
//router object

const router = express.Router()


//routing
//CREATE A USER
router.post("/signup", signup)

//SIGN IN
router.post("/signin", signin)

router.post("/google", googleAuth)
//test routes
//router.get("/test",requireSignIn,isAdmin, testController)


export default router