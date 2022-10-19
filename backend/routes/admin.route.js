const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const verifyToken = require("../middlewares/verifyToken");
const authorization = require("../middlewares/authorization");

router.route("/assignAdmin/:id").patch(verifyToken, userController.assignAdmin);

// router
//   .route("/assignManager/:id")
//   .patch(verifyToken, authorization("admin"), userController.assignManager);

// router.get("/me", verifyToken, userController.getMe);

module.exports = router;