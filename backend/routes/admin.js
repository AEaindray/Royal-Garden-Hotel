var express = require("express");
var router = express.Router();
const admin = require("./../controller/adminController");
const adminRoom = require("./../controller/adminRoomController");
const { verifyAdminToken } = require("./../middleware/auth");
router.post("/", admin.registerAdmin);
router.post("/login", admin.login);
router.use(verifyAdminToken);
router.get("/room", adminRoom.getAllRooms);
router.get("/room/:id", adminRoom.getRoomsById);
router.post("/room", adminRoom.saveRoom);
router.put("/room/:id", adminRoom.updateRoom);
router.delete("/room/:id", adminRoom.deleteRoom);
router.get("/booking", admin.getAllBookings);
router.delete("/booking/:id", admin.deleteBooking);
router.get("/user", admin.getAllUsers);
router.get("/user/:id", admin.getUserById);
router.delete("/user/:id", admin.deleteUser);
module.exports = router;
