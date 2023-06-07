const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const upload = require('../utils/multer');

router.get('/', profileController.getAllProfiles);
router.post('/', upload.single('profilePicture'), profileController.createProfile);

module.exports = router;