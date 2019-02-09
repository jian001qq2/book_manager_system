const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes=require("./users")
const eventRoutes=require("./event")
// // Book routes
router.use("/books", bookRoutes);
//User routes
router.use("/users",userRoutes)
// //Admin event routes
router.use("/events",eventRoutes)
module.exports = router;
