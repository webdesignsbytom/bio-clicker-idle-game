const express = require('express')

const router = express.Router();
const {
    getAllItems,
    createNewItem,
} = require('../controllers/items')

router.get('/', getAllItems)
router.post('/', createNewItem)


module.exports = router