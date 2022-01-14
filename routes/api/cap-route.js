const router = require("express").Router();
const { getCapture } = require("../../controllers/cap-controller");

// /api/cap
router.route("/").get(getCapture);

module.exports = router;
