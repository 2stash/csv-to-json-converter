const express = require("express");
const router = express.Router();

// @route   POST api/users
// @desc    Register User
// @access  Public
router.post(
  "/", (req, res) => {

    const { name, email, password } = req.body;
    console.log(req)
    return 'hi'
  }
);

module.exports = router;
