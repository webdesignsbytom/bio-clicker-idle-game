const express = require("express");
// const { authorization } = require('../middleware/auth')

const router = express.Router();
const {
    getAllUsers,
    registerNewUser
} = require('../controllers/users');

router.get('/', getAllUsers);
router.post('/', registerNewUser);


module.exports = router;

