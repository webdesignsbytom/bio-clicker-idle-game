const express = require('express');

const router = express.Router();
const {
  getAllBuildings,
  createNewBuilding,
} = require('../controllers/buildings');

router.get('/', getAllBuildings);
router.post('/', createNewBuilding);

module.exports = router;
