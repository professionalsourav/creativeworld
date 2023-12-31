import  express from "express";

import { verifyToken } from "../middlewares/verifyToken.js";
import { addVideo, addView, deleteVideo, getByTag, getVideo, getallVideo, getoneVideo, random, search, sub, trend, updateVideo } from "../controller/VideoController.js";



const videoRouter = express.Router();

videoRouter.post("/", verifyToken, addVideo)
videoRouter.put("/:id", verifyToken, addVideo)
videoRouter.delete("/:id", verifyToken, deleteVideo)
videoRouter.get("/find/:id", getVideo)
videoRouter.put("/view/:id", addView)
videoRouter.get("/trend", trend)
videoRouter.get("/random", random)
videoRouter.get("/sub",verifyToken, sub)
videoRouter.get("/tags", getByTag)
videoRouter.get("/search", search)
videoRouter.get("/get/allvideo",getallVideo )
videoRouter.get("/get/video/:id", getoneVideo )

export default videoRouter;