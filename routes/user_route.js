import  express  from "express";
import { userRegisteration } from "../controller/user_controller.js";

const app = express();

app.post('/register',userRegisteration)

export default app