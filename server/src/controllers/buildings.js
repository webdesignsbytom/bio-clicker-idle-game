const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {
    findAllBuildings
} = require('../domain/buildings');

const getAllBuildings = async (req, res) => {
  console.log('getting all buildings...');

  try {
    //
    const foundBuildings = await findAllBuildings();

    if (!foundBuildings) {
      return res.status(404).json({
        status: `404 Not Found`,
        message: `No buildings were found`,
        code: `404`,
      });
    }

    if (foundBuildings.length === 0) {
      return res.status(403).json({
        message: `Database is currently empty and no buildings were found`,
      });
    }

    return res.status(201).json({
      message: `Found ${foundBuildings.length} buildings`,
      code: `201`,
      data: foundBuildings,
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

module.exports = {
    getAllBuildings
};
