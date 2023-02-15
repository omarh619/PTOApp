const express = require("express");
const router = express.Router();
const editController = require('../controllers/edit');
const { ensureAuth } = require("../middleware/auth");

 

router.get('/remove/:id', ensureAuth, editController.deleteTicket)
router.get('/:id', ensureAuth, editController.updateTicket)
router.get('/deny/:id', ensureAuth, editController.denyTicket)


module.exports = router;
