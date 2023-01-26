const express = require('express');

const router = express.Router();
const {
  getAllItems,
  createNewItem,
  buyItemFromStore,
} = require('../controllers/items');

router.get('/', getAllItems);
router.post('/', createNewItem);
router.post('/:id/user/:id', buyItemFromStore);

module.exports = router;
