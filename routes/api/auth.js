import express from "express";
import { validateBody } from "../../middlewares/validateBody.js";
import registerSchema from "../../models/user.js";
import ctrl from "../../controllers/auth.js";

const authRouter = express.Router();

authRouter.post("/register", validateBody(registerSchema), ctrl.register);
export default authRouter;
