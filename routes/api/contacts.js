import express from "express";
import ctrl from "../../controllers/contacts.js";
import {
  isValidId,
  validateBody,
  authenticate,
} from "../../middlewares/index.js";
import { schemasJoi } from "../../models/contact.js";

const router = express.Router();

router.get("/", authenticate, ctrl.getAll);

router.get("/:id", authenticate, isValidId, ctrl.getById);

router.post(
  "/",
  authenticate,
  validateBody(schemasJoi.controlPost),
  ctrl.postAddContact
);

router.delete("/:id", authenticate, isValidId, ctrl.deleteById);

router.put(
  "/:id",
  authenticate,
  validateBody(schemasJoi.controlPut),
  isValidId,
  ctrl.putUpdateById
);

router.patch(
  "/:id/favorite",
  authenticate,
  validateBody(schemasJoi.controlPatch),
  isValidId,
  ctrl.patchUpdateById
);

export default router;
