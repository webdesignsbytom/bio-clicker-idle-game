const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { findAllItems, findItemByName, createItem } = require('../domain/items');

const getAllItems = async (req, res) => {
  console.log('getting all items...');

  try {
    //
    const foundItems = await findAllItems();

    if (!foundItems) {
      return res.status(404).json({
        status: `404 Not Found`,
        message: `No Items were found`,
        code: `404`,
      });
    }

    if (foundItems.length === 0) {
      return res.status(403).json({
        message: `Database is currently empty and no items were found`,
      });
    }

    return res.status(201).json({
      message: `Found ${foundItems.length} items`,
      code: `201`,
      data: foundItems,
    });
    //
  } catch (error) {
    //
    return res.status(500).json({
      code: `500`,
      error: error.message,
      message: `Internal server error: ${error.message}, code: 500`,
    });
  }
};

const createNewItem = async (req, res) => {
  console.log('creating new item');
  const { name } = req.body;
  console.log('name: ', name);

  try {
    const foundItem = await findItemByName(name);
    console.log('found item: ', foundItem);

    if (foundItem) {
      return res.status(401).json({
        message: `Item already exists in database with name ${name}`,
      });
    }

    const newItem = await createItem(name);
    console.log('new item', newItem);

    if (!newItem) {
      return res.status(401).json({
        message: `Item was not created successfully`,
      });
    }

    return res.status(201).json({
      message: `Created item ${name} successfully}`,
      code: `201`,
      data: newItem,
    });
  } catch (error) {
    //
    return res.status(500).json({
      code: `500`,
      error: error.message,
      message: `Internal server error: ${error.message}, code: 500`,
    });
  }
};

const buyItemFromStore = async (req, res) => {
  console.log('item xxx');
  const { name } = req.body;
  console.log('name: ', name);
  const userId = 2;
  console.log('userId: ', userId);

  try {
    
    const foundItem = await findItemByName(name);
    console.log('found item: ', foundItem);

    if (foundItem) {
      return res.status(401).json({
        message: `Item already exists in database with name ${name}`,
      });
    }
  } catch (error) {
    //
    return res.status(500).json({
      code: `500`,
      error: error.message,
      message: `Internal server error: ${error.message}, code: 500`,
    });
  }
};

module.exports = { getAllItems, createNewItem, buyItemFromStore };
