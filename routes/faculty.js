const express = require('express');
const router = express.Router();

const facultyController = require('../controllers/faculty');

router.get('/:facultyName', facultyController.getFaculty);

module.exports = router;
