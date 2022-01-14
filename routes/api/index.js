const router = require("express").Router();
const capRoutes = require("./cap-route");

router.use("/cap", capRoutes);

module.exports = router;
