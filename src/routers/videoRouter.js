import express from "express"; 
import {see, edit, upload, remove} from "../controllers/videoConroller"; 

const videoRouter = express.Router();

videoRouter.get("/upload", upload); 
videoRouter.get("/:id(\\d+)", see); 
videoRouter.get("/:id(\\d+)/edit", edit); 
videoRouter.get("/:id(\\d+)/remove", remove); 

export default videoRouter; 