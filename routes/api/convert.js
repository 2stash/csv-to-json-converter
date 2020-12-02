const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');
const dataConverter = require('../../jsonReformater');
const papa = require('../../papaParse');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
 
const upload = multer({ storage: storage })

// @route   POST api/users
// @desc    Register User
// @access  Public
router.post(
  "/", upload.single('file'), async (req, res) => {

    let fileUrl = req.file.path.replace(/\\/g, "/")
    console.log(req.file)
    let parsedJSON = papa(fileUrl, req.file.filename)
    res.send('file received')

  }
);

module.exports = router;
