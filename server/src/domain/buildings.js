const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const findAllBuildings = () => prisma.building.findMany({});
const findBuildingByName = (name) =>
  prisma.building.findFirst({
    where: {
      name: name,
    },
  });
const createBuilding = (name) =>
  prisma.building.create({
    data: {
      name: name,
    },
  });
module.exports = {
  findAllBuildings,
  createBuilding,
  findBuildingByName,
};
