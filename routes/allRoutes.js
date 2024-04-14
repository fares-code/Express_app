const express = require('express')
const router = express.Router()
const User = require("../models/customerSchema");
var moment = require("moment");
const userController = require('../controllers/userController')
// GET Requst
router.get("/", userController.user_index_get);


router.get("/edit/:id", userController.user_edit_get);

router.get("/view/:id", userController.user_view_get);

// POST Requst



router.post("/search", userController.user_search_post);
// DELETE Request
router.delete("/edit/:id", userController.user_indix_delet);
//UPDATE REQUEST
router.put("/edit/:id", userController.user_update);

module.exports = router;