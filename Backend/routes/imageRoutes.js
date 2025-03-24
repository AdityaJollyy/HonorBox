const express = require("express");
const router = express.Router();
const imageController = require("../controllers/imageController");

router.post("/upload-image", imageController.uploadImage);
router.get("/get-images", imageController.getImages);

module.exports = router;