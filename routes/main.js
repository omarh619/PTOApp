const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const editController = require("../controllers/edit");

const { ensureAuth, ensureAdmin } = require("../middleware/auth");

//Main Routes 
router.get("/", homeController.getIndex);
router.post('/new', ensureAuth, editController.createTicket);
router.get("/profile", ensureAuth, editController.getProfile);
router.get("/admin", ensureAuth, ensureAdmin, editController.isAdmin);


//Routes for user login/signup

router.get("/login", authController.getLogin);
router.get("/login", authController.isAdmin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);



module.exports = router;
