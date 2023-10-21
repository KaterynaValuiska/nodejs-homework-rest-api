import express from "express";
import { validateBody, authenticate, upload } from "../../middlewares/index.js";
import { schemas } from "../../models/user.js";
import ctrl from "../../controllers/auth.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(schemas.registerSchema),
  ctrl.register
);

authRouter.get("/verify/:verificationCode", ctrl.verifyEmail);

authRouter.post(
  "/verify",
  validateBody(schemas.verifySchema),
  ctrl.resentVarifyEmail
);

authRouter.post("/login", validateBody(schemas.loginSchema), ctrl.login);

authRouter.get("/current", authenticate, ctrl.getCurrent);

authRouter.post("/logout", authenticate, ctrl.logout);

authRouter.patch(
  "/",
  authenticate,
  validateBody(schemas.subscriptionSchema),
  ctrl.patchUpdateSubscription
);

authRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

export default authRouter;
