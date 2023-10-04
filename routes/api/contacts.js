import express from "express";
import ctrl from "../../controllers/contacts.js";
import { isValidId } from "../../middlewares/isValidId.js";
import { validateBody } from "../../middlewares/validateBody.js";
import schemasJoi from "../../models/contact.js";

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", isValidId, ctrl.getById);

router.post("/", validateBody(schemasJoi.controlPost), ctrl.postAddContact);

router.delete("/:id", isValidId, ctrl.deleteById);

router.put(
  "/:id",
  validateBody(schemasJoi.controlPut),
  isValidId,
  ctrl.putUpdateById
);

router.patch(
  "/:id/favorite",
  validateBody(schemasJoi.controlPatch),
  isValidId,
  ctrl.patchUpdateById
);

export default router;
