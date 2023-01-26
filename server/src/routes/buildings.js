const express = require('express')

const router = express.Router();
const {
    getAllBuildings,
} = require('../controllers/buildings')

router.get('/', getAllBuildings)


module.exports = router