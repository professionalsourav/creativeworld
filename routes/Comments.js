import  express from "express";
import { addComment, deleteComment, getComments } from "../controller/CommentController.js";
import { verifyToken } from '../middlewares/verifyToken.js';


const commentRouter = express.Router();

commentRouter.post("/", verifyToken, addComment)
commentRouter.delete("/:id", verifyToken, deleteComment)
commentRouter.get("/:videoId", getComments)

export default commentRouter;