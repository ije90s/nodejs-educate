import express from "express"; 
import {join, login} from "../controllers/userController"; 
import {trending, search} from "../controllers/videoConroller"; 

const gloalRouter = express.Router(); 

gloalRouter.get("/", trending); 
gloalRouter.get("/join", join); 
gloalRouter.get("/login", login); 
gloalRouter.get("/search", search);

export default gloalRouter; 