import  express from "express";
import { allUser, deleteUser, dislike, getUser, like, oneUser, subscribe, unsubscribe, update } from "../controller/UserController.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const userRouter = express.Router();

//update user
userRouter.put("/:id",verifyToken, update);

//delete user
userRouter.delete("/:id", verifyToken, deleteUser);

//get a user
userRouter.get("/find/:id",verifyToken,getUser )

//subscribe user
userRouter.put("/sub/:id",verifyToken,subscribe )

//unsubscribe user
userRouter.put("/unsub/:id",verifyToken,unsubscribe )

//like user
userRouter.put("/like/:videoId",verifyToken,like )


//unlike user
userRouter.put("/unlike/:videoId",verifyToken,dislike )

//get all the user
userRouter.get("/get/alluser",allUser)

//get one user
userRouter.get("/get/user/:id", oneUser)

export default userRouter;